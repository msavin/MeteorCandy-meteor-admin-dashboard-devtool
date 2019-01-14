# Settings

Settings is defined as one massive object called `Settings`. Each of its top-level object keys work as an ID for that set of settings information. With-in the value, we can configure how the rest of it should work.

`label` refers to the name of that group of data, which will be used to display it on the interface.

`fields` refers to all the fields that will be with-in this group of data. Each of the object keys will act as their id.

With-in fields:
`label` - is the name that will be used to represent that bit of data
`type` - applicable types are string, boolean and number
`value` - pre-determined value (must match type)