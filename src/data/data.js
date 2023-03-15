export const User = [
  { key: 1, name: "user", value: "izberi" },
  { key: 2, name: "user", value: "Airton" },
  { key: 3, name: "user", value: "Alain" },
  { key: 4, name: "user", value: "Kimi" },
  { key: 5, name: "user", value: "Sebastian" },
];

export const Inputs = [
  {
    key: 1,
    name: "task_name",
    type: "text",
    placeholder: "vpiši ime naloge",
    autoComplete: "off",
    label: "ime naloge",
    title: "vpiši ime naloge",
    errorMessage: "ime mora imeti vasj tri črke brez posebnih znakov",
    pattern: "^[A-Za-z]{3,15}$",
    required: true,
  },
  {
    key: 2,
    name: "description",
    type: "textarea",
    placeholder: "opiši nalogo",
    autoComplete: "off",
    label: "description",
    title: "opiši nalogo",
    cols: "45",
    rows: "4",
    errorMessage: "naloga mora imeti kratek opis",
    pattern: "^[A-Za-z]{3,150}$",
    required: true,
  },
  {
    key: 3,
    name: "date_from",
    type: "date",
    format: "dd.M.YYYY",
    label: "datum od",
    title: "izberi datum naročila",
    errorMessage: "izberi datum naročila",
    required: true,
  },
  {
    key: 4,
    name: "date_to",
    type: "date",
    label: "datum do",
    title: "izberite datum izvedbe",
    errorMessage: "izberite datum izvedbe",
    required: true,
  },
];

export const Narejeno = [
  { key: 1, name: "done", value: "izberi" },
  { key: 2, name: "done", value: "false" },
  { key: 3, name: "done", value: "true" },
];
