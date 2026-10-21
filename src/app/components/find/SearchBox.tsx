"use client";

import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import Select, {
  GroupBase,
  InputActionMeta,
  MultiValue,
  SelectInstance,
  StylesConfig,
} from "react-select";
import cx from "classnames";
import { Camp } from "@/interfaces/util/Camp";

type SearchOption = {
  label: string;
  value: string;
};

async function search(searchString: string) {
  const result = await fetch(`/api/school/search/get-camps-from-search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ searchString: searchString }),
  });
  return await result.json();
}

async function initialSearch(
  tags: MultiValue<{
    label: string;
    value: string;
  }>
) {
  const tmp = [];
  for (let i = 0; i < tags.length; i++) {
    tmp.push(tags[i].value);
  }

  const result = await fetch(
    `/api/school/search/get-camps-from-search/initial-search`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tags: tmp }),
    }
  );
  return await result.json();
}

export function SearchBox(props: {
  className?: string;
  onCampsUpdate: (camps: Camp[] | null) => Promise<void>;
  getCurrentRenderedCamps: () => Camp[] | null;
}) {
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const timeoutId = useRef<NodeJS.Timeout | undefined>(undefined);
  const [selectedOptions, setSelectedOptions] =
    useState<MultiValue<SearchOption>>();
  const selectRef = useRef<SelectInstance<SearchOption, true> | null>(null);
  const selectStyles: StylesConfig<SearchOption, true, GroupBase<SearchOption>> =
    {
      control: (styles) => ({
        ...styles,
        cursor: "text",
      }),
      valueContainer: (provided) => ({
        ...provided,
        height: "50px",
      }),
      input: (base) => ({
        ...base,
        fontSize: "20px",
      }),
    };

  useEffect(() => {
    timeoutId.current = setTimeout(async () => {
      if (currentSearch == "") {
        await props.onCampsUpdate(null);
      } else {
        console.log(selectedOptions);

        await props.onCampsUpdate((await search(currentSearch)).camps);
      }
    }, 250);

    return () => clearTimeout(timeoutId.current);
  }, [currentSearch]);

  return (
    <div className="w-full flex justify-center">
      <Select
        isMulti
        ref={selectRef}
        className={cx(props.className, "w-full h-full")}
        styles={selectStyles}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
          Menu: () => null,
        }}
        placeholder={currentSearch == "" ? "Search" : currentSearch}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
          if (e.key === "Enter") {
            selectRef.current?.blur();
          }
        }}
        onInputChange={(value: string, action: InputActionMeta) => {
          if (action.action === "input-change") {
            setCurrentSearch(value);
          }
        }}
        inputValue={currentSearch}
        value={null}
      />
    </div>
  );
}
