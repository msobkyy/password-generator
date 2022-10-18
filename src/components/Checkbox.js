import React from "react";

const Checkbox = React.forwardRef(({ checked, disabled, children }, ref) => {
  return (
    <div className="flex items-center my-3">
      <input
        ref={ref}
        checked={checked}
        disabled={disabled}
        style={{ accentColor: "#34d399" }}
        id="link-checkbox"
        type="checkbox"
        className="w-4 h-4 mr-2 text-emerald-400 rounded-xl border-gray-300 focus:ring-emerald-300 dark:focus:ring-emerald-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="link-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {children}
      </label>
    </div>
  );
});

export default Checkbox;
