export const userLoginBlueprint = [
  //! Login
  {
    name: "name",
    label: "Your username",
    settings: { required: "Please fill this field" },
  },
  {
    name: "password",
    label: "Your password",
    settings: {
      required: "Please fill this field",
      type: "password",
      minLength: "8",
    },
  },
];

export const userSignUpBlueprint = [
  //! Signup
  {
    name: "name",
    label: "Your username",
    settings: { required: "Please fill this field" },
  },
  {
    name: "email",
    label: "Your email",
    settings: {
      type: "email",
      required: "Please fill this field",
    },
  },
  {
    name: "password",
    label: "Your password",
    settings: {
      type: "password",
      required: "Please fill this field",
    },
  },
  {
    name: "avatar",
    label: "Your avatar",
    settings: {
      type: "file",
      required: "Please upload your avatar",
    },
  },
];

export const dreamBlueprint = [
  //! Dream write
  {
    name: "name",
    label: "Your name",
    settings: {
      required: false,
      maxLength: 40,
    },
  },
  {
    name: "time",
    label: "Time when dream occured",
    settings: {
      required: false,
      type: "time",
    },
  },
  {
    name: "email",
    label: "Your email",

    settings: {
      required: false,
      type: "email",
      maxLength: 40,
    },
  },
  {
    name: "dreamName",
    label: "Name of your dream",
    settings: {
      required: "Please fill out this field",
      maxLength: 40,
    },
  },
  {
    name: "description",
    label: "Describe your dream",
    settings: {
      required: "Please fill out this field",
      minLength: 40,
      type: "textarea",
    },
  },
];

export const emailBlueprint = [
  //! Send email
  {
    name: "name",
    label: "Your name",
    settings: { required: "Please fill this field" },
  },
  {
    name: "email",
    label: "Your email",
    settings: {
      required: "Please fill this field",
      type: "email",
    },
  },
  {
    name: "message",
    label: "Your message",
    settings: {
      required: "Please fill this field",
      minLength: 40,
      type: "textarea",
    },
  },
];
