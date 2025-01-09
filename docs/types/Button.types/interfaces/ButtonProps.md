[**the-cdj-ui**](../../../README.md)

***

[the-cdj-ui](../../../README.md) / [types/Button.types](../README.md) / ButtonProps

# Interface: ButtonProps

## Extends

- `Omit`\<`MuiButtonProps`, `"color"`\>

## Properties

### about?

> `optional` **about**: `string`

#### Inherited from

`Omit.about`

#### Defined in

node\_modules/@types/react/index.d.ts:2920

***

### accessKey?

> `optional` **accessKey**: `string`

#### Inherited from

`Omit.accessKey`

#### Defined in

node\_modules/@types/react/index.d.ts:2895

***

### action?

> `optional` **action**: `Ref`\<`ButtonBaseActions`\>

A ref for imperative actions.
It currently only supports `focusVisible()` action.

#### Inherited from

`Omit.action`

#### Defined in

node\_modules/@mui/material/ButtonBase/ButtonBase.d.ts:13

***

### aria-activedescendant?

> `optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

`Omit.aria-activedescendant`

#### Defined in

node\_modules/@types/react/index.d.ts:2593

***

### aria-atomic?

> `optional` **aria-atomic**: `Booleanish`

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`Omit.aria-atomic`

#### Defined in

node\_modules/@types/react/index.d.ts:2595

***

### aria-autocomplete?

> `optional` **aria-autocomplete**: `"none"` \| `"inline"` \| `"both"` \| `"list"`

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

`Omit.aria-autocomplete`

#### Defined in

node\_modules/@types/react/index.d.ts:2600

***

### aria-braillelabel?

> `optional` **aria-braillelabel**: `string`

Defines a string value that labels the current element, which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`Omit.aria-braillelabel`

#### Defined in

node\_modules/@types/react/index.d.ts:2606

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription**: `string`

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

#### See

aria-roledescription.

#### Inherited from

`Omit.aria-brailleroledescription`

#### Defined in

node\_modules/@types/react/index.d.ts:2611

***

### aria-busy?

> `optional` **aria-busy**: `Booleanish`

#### Inherited from

`Omit.aria-busy`

#### Defined in

node\_modules/@types/react/index.d.ts:2612

***

### aria-checked?

> `optional` **aria-checked**: `boolean` \| `"mixed"` \| `"false"` \| `"true"`

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`Omit.aria-checked`

#### Defined in

node\_modules/@types/react/index.d.ts:2617

***

### aria-colcount?

> `optional` **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`Omit.aria-colcount`

#### Defined in

node\_modules/@types/react/index.d.ts:2622

***

### aria-colindex?

> `optional` **aria-colindex**: `number`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`Omit.aria-colindex`

#### Defined in

node\_modules/@types/react/index.d.ts:2627

***

### aria-colindextext?

> `optional` **aria-colindextext**: `string`

Defines a human readable text alternative of aria-colindex.

#### See

aria-rowindextext.

#### Inherited from

`Omit.aria-colindextext`

#### Defined in

node\_modules/@types/react/index.d.ts:2632

***

### aria-colspan?

> `optional` **aria-colspan**: `number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`Omit.aria-colspan`

#### Defined in

node\_modules/@types/react/index.d.ts:2637

***

### aria-controls?

> `optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

`Omit.aria-controls`

#### Defined in

node\_modules/@types/react/index.d.ts:2642

***

### aria-current?

> `optional` **aria-current**: `boolean` \| `"time"` \| `"page"` \| `"false"` \| `"true"` \| `"step"` \| `"location"` \| `"date"`

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

`Omit.aria-current`

#### Defined in

node\_modules/@types/react/index.d.ts:2644

***

### aria-describedby?

> `optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`Omit.aria-describedby`

#### Defined in

node\_modules/@types/react/index.d.ts:2649

***

### aria-description?

> `optional` **aria-description**: `string`

Defines a string value that describes or annotates the current element.

#### See

related aria-describedby.

#### Inherited from

`Omit.aria-description`

#### Defined in

node\_modules/@types/react/index.d.ts:2654

***

### aria-details?

> `optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`Omit.aria-details`

#### Defined in

node\_modules/@types/react/index.d.ts:2659

***

### aria-disabled?

> `optional` **aria-disabled**: `Booleanish`

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`Omit.aria-disabled`

#### Defined in

node\_modules/@types/react/index.d.ts:2664

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect**: `"none"` \| `"link"` \| `"copy"` \| `"move"` \| `"execute"` \| `"popup"`

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

`Omit.aria-dropeffect`

#### Defined in

node\_modules/@types/react/index.d.ts:2669

***

### aria-errormessage?

> `optional` **aria-errormessage**: `string`

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`Omit.aria-errormessage`

#### Defined in

node\_modules/@types/react/index.d.ts:2674

***

### aria-expanded?

> `optional` **aria-expanded**: `Booleanish`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

`Omit.aria-expanded`

#### Defined in

node\_modules/@types/react/index.d.ts:2676

***

### aria-flowto?

> `optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

`Omit.aria-flowto`

#### Defined in

node\_modules/@types/react/index.d.ts:2681

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed**: `Booleanish`

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

`Omit.aria-grabbed`

#### Defined in

node\_modules/@types/react/index.d.ts:2686

***

### aria-haspopup?

> `optional` **aria-haspopup**: `boolean` \| `"dialog"` \| `"menu"` \| `"grid"` \| `"listbox"` \| `"false"` \| `"true"` \| `"tree"`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

`Omit.aria-haspopup`

#### Defined in

node\_modules/@types/react/index.d.ts:2688

***

### aria-hidden?

> `optional` **aria-hidden**: `Booleanish`

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`Omit.aria-hidden`

#### Defined in

node\_modules/@types/react/index.d.ts:2693

***

### aria-invalid?

> `optional` **aria-invalid**: `boolean` \| `"false"` \| `"true"` \| `"grammar"` \| `"spelling"`

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`Omit.aria-invalid`

#### Defined in

node\_modules/@types/react/index.d.ts:2698

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

`Omit.aria-keyshortcuts`

#### Defined in

node\_modules/@types/react/index.d.ts:2700

***

### aria-label?

> `optional` **aria-label**: `string`

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`Omit.aria-label`

#### Defined in

node\_modules/@types/react/index.d.ts:2705

***

### aria-labelledby?

> `optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`Omit.aria-labelledby`

#### Defined in

node\_modules/@types/react/index.d.ts:2710

***

### aria-level?

> `optional` **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

`Omit.aria-level`

#### Defined in

node\_modules/@types/react/index.d.ts:2712

***

### aria-live?

> `optional` **aria-live**: `"off"` \| `"assertive"` \| `"polite"`

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`Omit.aria-live`

#### Defined in

node\_modules/@types/react/index.d.ts:2714

***

### aria-modal?

> `optional` **aria-modal**: `Booleanish`

Indicates whether an element is modal when displayed.

#### Inherited from

`Omit.aria-modal`

#### Defined in

node\_modules/@types/react/index.d.ts:2716

***

### aria-multiline?

> `optional` **aria-multiline**: `Booleanish`

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`Omit.aria-multiline`

#### Defined in

node\_modules/@types/react/index.d.ts:2718

***

### aria-multiselectable?

> `optional` **aria-multiselectable**: `Booleanish`

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

`Omit.aria-multiselectable`

#### Defined in

node\_modules/@types/react/index.d.ts:2720

***

### aria-orientation?

> `optional` **aria-orientation**: `"horizontal"` \| `"vertical"`

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`Omit.aria-orientation`

#### Defined in

node\_modules/@types/react/index.d.ts:2722

***

### aria-owns?

> `optional` **aria-owns**: `string`

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

#### See

aria-controls.

#### Inherited from

`Omit.aria-owns`

#### Defined in

node\_modules/@types/react/index.d.ts:2728

***

### aria-placeholder?

> `optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

`Omit.aria-placeholder`

#### Defined in

node\_modules/@types/react/index.d.ts:2733

***

### aria-posinset?

> `optional` **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`Omit.aria-posinset`

#### Defined in

node\_modules/@types/react/index.d.ts:2738

***

### aria-pressed?

> `optional` **aria-pressed**: `boolean` \| `"mixed"` \| `"false"` \| `"true"`

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`Omit.aria-pressed`

#### Defined in

node\_modules/@types/react/index.d.ts:2743

***

### aria-readonly?

> `optional` **aria-readonly**: `Booleanish`

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`Omit.aria-readonly`

#### Defined in

node\_modules/@types/react/index.d.ts:2748

***

### aria-relevant?

> `optional` **aria-relevant**: `"text"` \| `"all"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

`Omit.aria-relevant`

#### Defined in

node\_modules/@types/react/index.d.ts:2753

***

### aria-required?

> `optional` **aria-required**: `Booleanish`

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`Omit.aria-required`

#### Defined in

node\_modules/@types/react/index.d.ts:2766

***

### aria-roledescription?

> `optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`Omit.aria-roledescription`

#### Defined in

node\_modules/@types/react/index.d.ts:2768

***

### aria-rowcount?

> `optional` **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`Omit.aria-rowcount`

#### Defined in

node\_modules/@types/react/index.d.ts:2773

***

### aria-rowindex?

> `optional` **aria-rowindex**: `number`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`Omit.aria-rowindex`

#### Defined in

node\_modules/@types/react/index.d.ts:2778

***

### aria-rowindextext?

> `optional` **aria-rowindextext**: `string`

Defines a human readable text alternative of aria-rowindex.

#### See

aria-colindextext.

#### Inherited from

`Omit.aria-rowindextext`

#### Defined in

node\_modules/@types/react/index.d.ts:2783

***

### aria-rowspan?

> `optional` **aria-rowspan**: `number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`Omit.aria-rowspan`

#### Defined in

node\_modules/@types/react/index.d.ts:2788

***

### aria-selected?

> `optional` **aria-selected**: `Booleanish`

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`Omit.aria-selected`

#### Defined in

node\_modules/@types/react/index.d.ts:2793

***

### aria-setsize?

> `optional` **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`Omit.aria-setsize`

#### Defined in

node\_modules/@types/react/index.d.ts:2798

***

### aria-sort?

> `optional` **aria-sort**: `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`Omit.aria-sort`

#### Defined in

node\_modules/@types/react/index.d.ts:2800

***

### aria-valuemax?

> `optional` **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

`Omit.aria-valuemax`

#### Defined in

node\_modules/@types/react/index.d.ts:2802

***

### aria-valuemin?

> `optional` **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

`Omit.aria-valuemin`

#### Defined in

node\_modules/@types/react/index.d.ts:2804

***

### aria-valuenow?

> `optional` **aria-valuenow**: `number`

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`Omit.aria-valuenow`

#### Defined in

node\_modules/@types/react/index.d.ts:2809

***

### aria-valuetext?

> `optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`Omit.aria-valuetext`

#### Defined in

node\_modules/@types/react/index.d.ts:2811

***

### ariaLabel?

> `optional` **ariaLabel**: `string`

#### Defined in

[src/types/Button.types.d.ts:16](https://github.com/hiyaryan/the-cdj-ui/blob/66083ffd99c70e3de7b7a7a2d26584eb05be11c4/src/types/Button.types.d.ts#L16)

***

### autoCapitalize?

> `optional` **autoCapitalize**: `string`

#### Inherited from

`Omit.autoCapitalize`

#### Defined in

node\_modules/@types/react/index.d.ts:2933

***

### autoCorrect?

> `optional` **autoCorrect**: `string`

#### Inherited from

`Omit.autoCorrect`

#### Defined in

node\_modules/@types/react/index.d.ts:2934

***

### autoFocus?

> `optional` **autoFocus**: `boolean`

#### Inherited from

`Omit.autoFocus`

#### Defined in

node\_modules/@types/react/index.d.ts:2896

***

### autoSave?

> `optional` **autoSave**: `string`

#### Inherited from

`Omit.autoSave`

#### Defined in

node\_modules/@types/react/index.d.ts:2935

***

### centerRipple?

> `optional` **centerRipple**: `boolean`

If `true`, the ripples are centered.
They won't start at the cursor interaction position.

#### Default

```ts
false
```

#### Inherited from

`Omit.centerRipple`

#### Defined in

node\_modules/@mui/material/ButtonBase/ButtonBase.d.ts:19

***

### children?

> `optional` **children**: `ReactNode`

The content of the component.

#### Inherited from

`Omit.children`

#### Defined in

node\_modules/@mui/material/Button/Button.d.ts:19

***

### classes?

> `optional` **classes**: `Partial`\<`ButtonClasses`\> & `Partial`\<`ClassNameMap`\<`never`\>\>

Override or extend the styles applied to the component.

#### Inherited from

`Omit.classes`

#### Defined in

node\_modules/@mui/material/Button/Button.d.ts:23

***

### className?

> `optional` **className**: `string`

#### Inherited from

`Omit.className`

#### Defined in

node\_modules/@mui/material/OverridableComponent.d.ts:60

***

### color?

> `optional` **color**: `"primary"` \| `"secondary"` \| `"inherit"` \| `"error"` \| `"success"` \| `"info"` \| `"warning"`

#### Defined in

[src/types/Button.types.d.ts:8](https://github.com/hiyaryan/the-cdj-ui/blob/66083ffd99c70e3de7b7a7a2d26584eb05be11c4/src/types/Button.types.d.ts#L8)

***

### component?

> `optional` **component**: `ElementType`\<`any`, keyof IntrinsicElements\>

#### Inherited from

`Omit.component`

#### Defined in

node\_modules/@mui/material/Button/Button.d.ts:128

***

### content?

> `optional` **content**: `string`

#### Inherited from

`Omit.content`

#### Defined in

node\_modules/@types/react/index.d.ts:2921

***

### contentEditable?

> `optional` **contentEditable**: `"inherit"` \| `Booleanish` \| `"plaintext-only"`

#### Inherited from

`Omit.contentEditable`

#### Defined in

node\_modules/@types/react/index.d.ts:2898

***

### contextMenu?

> `optional` **contextMenu**: `string`

#### Inherited from

`Omit.contextMenu`

#### Defined in

node\_modules/@types/react/index.d.ts:2899

***

### dangerouslySetInnerHTML?

> `optional` **dangerouslySetInnerHTML**: `object`

#### \_\_html

> **\_\_html**: `string` \| `TrustedHTML`

#### Inherited from

`Omit.dangerouslySetInnerHTML`

#### Defined in

node\_modules/@types/react/index.d.ts:2380

***

### datatype?

> `optional` **datatype**: `string`

#### Inherited from

`Omit.datatype`

#### Defined in

node\_modules/@types/react/index.d.ts:2922

***

### defaultChecked?

> `optional` **defaultChecked**: `boolean`

#### Inherited from

`Omit.defaultChecked`

#### Defined in

node\_modules/@types/react/index.d.ts:2889

***

### defaultValue?

> `optional` **defaultValue**: `string` \| `number` \| readonly `string`[]

#### Inherited from

`Omit.defaultValue`

#### Defined in

node\_modules/@types/react/index.d.ts:2890

***

### dir?

> `optional` **dir**: `string`

#### Inherited from

`Omit.dir`

#### Defined in

node\_modules/@types/react/index.d.ts:2900

***

### disabled?

> `optional` **disabled**: `boolean`

If `true`, the component is disabled.

#### Default

```ts
false
```

#### Inherited from

`Omit.disabled`

#### Defined in

node\_modules/@mui/material/Button/Button.d.ts:38

***

### disableElevation?

> `optional` **disableElevation**: `boolean`

If `true`, no elevation is used.

#### Default

```ts
false
```

#### Inherited from

`Omit.disableElevation`

#### Defined in

node\_modules/@mui/material/Button/Button.d.ts:43

***

### disableFocusRipple?

> `optional` **disableFocusRipple**: `boolean`

If `true`, the  keyboard focus ripple is disabled.

#### Default

```ts
false
```

#### Inherited from

`Omit.disableFocusRipple`

#### Defined in

node\_modules/@mui/material/Button/Button.d.ts:48

***

### disableRipple?

> `optional` **disableRipple**: `boolean`

If `true`, the ripple effect is disabled.

⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
to highlight the element by applying separate styles with the `.Mui-focusVisible` class.

#### Default

```ts
false
```

#### Inherited from

`Omit.disableRipple`

#### Defined in

node\_modules/@mui/material/ButtonBase/ButtonBase.d.ts:40

***

### disableTouchRipple?

> `optional` **disableTouchRipple**: `boolean`

If `true`, the touch ripple effect is disabled.

#### Default

```ts
false
```

#### Inherited from

`Omit.disableTouchRipple`

#### Defined in

node\_modules/@mui/material/ButtonBase/ButtonBase.d.ts:45

***

### draggable?

> `optional` **draggable**: `Booleanish`

#### Inherited from

`Omit.draggable`

#### Defined in

node\_modules/@types/react/index.d.ts:2901

***

### endIcon?

> `optional` **endIcon**: `ReactNode`

Element placed after the children.

#### Inherited from

`Omit.endIcon`

#### Defined in

node\_modules/@mui/material/Button/Button.d.ts:52

***

### focusRipple?

> `optional` **focusRipple**: `boolean`

If `true`, the base button will have a keyboard focus ripple.

#### Default

```ts
false
```

#### Inherited from

`Omit.focusRipple`

#### Defined in

node\_modules/@mui/material/ButtonBase/ButtonBase.d.ts:50

***

### focusVisibleClassName?

> `optional` **focusVisibleClassName**: `string`

This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
if needed.

#### Inherited from

`Omit.focusVisibleClassName`

#### Defined in

node\_modules/@mui/material/ButtonBase/ButtonBase.d.ts:59

***

### form?

> `optional` **form**: `string`

#### Inherited from

`Omit.form`

#### Defined in

node\_modules/@types/react/index.d.ts:3136

***

### formAction?

> `optional` **formAction**: `string` \| (`formData`) => `void`

#### Inherited from

`Omit.formAction`

#### Defined in

node\_modules/@types/react/index.d.ts:3137

***

### formEncType?

> `optional` **formEncType**: `string`

#### Inherited from

`Omit.formEncType`

#### Defined in

node\_modules/@types/react/index.d.ts:3143

***

### formMethod?

> `optional` **formMethod**: `string`

#### Inherited from

`Omit.formMethod`

#### Defined in

node\_modules/@types/react/index.d.ts:3144

***

### formNoValidate?

> `optional` **formNoValidate**: `boolean`

#### Inherited from

`Omit.formNoValidate`

#### Defined in

node\_modules/@types/react/index.d.ts:3145

***

### formTarget?

> `optional` **formTarget**: `string`

#### Inherited from

`Omit.formTarget`

#### Defined in

node\_modules/@types/react/index.d.ts:3146

***

### fullWidth?

> `optional` **fullWidth**: `boolean`

If `true`, the button will take up the full width of its container.

#### Default

```ts
false
```

#### Inherited from

`Omit.fullWidth`

#### Defined in

node\_modules/@mui/material/Button/Button.d.ts:57

***

### hidden?

> `optional` **hidden**: `boolean`

#### Inherited from

`Omit.hidden`

#### Defined in

node\_modules/@types/react/index.d.ts:2902

***

### href?

> `optional` **href**: `string`

The URL to link to when the button is clicked.
If defined, an `a` element will be used as the root node.

#### Inherited from

`Omit.href`

#### Defined in

node\_modules/@mui/material/Button/Button.d.ts:62

***

### id?

> `optional` **id**: `string`

#### Inherited from

`Omit.id`

#### Defined in

node\_modules/@types/react/index.d.ts:2903

***

### inert?

> `optional` **inert**: `boolean`

#### See

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert

#### Inherited from

`Omit.inert`

#### Defined in

node\_modules/@types/react/experimental.d.ts:125

***

### inlist?

> `optional` **inlist**: `any`

#### Inherited from

`Omit.inlist`

#### Defined in

node\_modules/@types/react/index.d.ts:2923

***

### inputMode?

> `optional` **inputMode**: `"none"` \| `"search"` \| `"text"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"`

Hints at the type of data that might be entered by the user while editing the element or its contents

#### See

[https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute)

#### Inherited from

`Omit.inputMode`

#### Defined in

node\_modules/@types/react/index.d.ts:2951

***

### is?

> `optional` **is**: `string`

Specify that a standard HTML element should behave like a defined custom built-in element

#### See

[https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is](https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is)

#### Inherited from

`Omit.is`

#### Defined in

node\_modules/@types/react/index.d.ts:2956

***

### itemID?

> `optional` **itemID**: `string`

#### Inherited from

`Omit.itemID`

#### Defined in

node\_modules/@types/react/index.d.ts:2940

***

### itemProp?

> `optional` **itemProp**: `string`

#### Inherited from

`Omit.itemProp`

#### Defined in

node\_modules/@types/react/index.d.ts:2937

***

### itemRef?

> `optional` **itemRef**: `string`

#### Inherited from

`Omit.itemRef`

#### Defined in

node\_modules/@types/react/index.d.ts:2941

***

### itemScope?

> `optional` **itemScope**: `boolean`

#### Inherited from

`Omit.itemScope`

#### Defined in

node\_modules/@types/react/index.d.ts:2938

***

### itemType?

> `optional` **itemType**: `string`

#### Inherited from

`Omit.itemType`

#### Defined in

node\_modules/@types/react/index.d.ts:2939

***

### key?

> `optional` **key**: `null` \| `Key`

#### Inherited from

`Omit.key`

#### Defined in

node\_modules/@types/react/index.d.ts:261

***

### label

> **label**: `string`

#### Defined in

[src/types/Button.types.d.ts:7](https://github.com/hiyaryan/the-cdj-ui/blob/66083ffd99c70e3de7b7a7a2d26584eb05be11c4/src/types/Button.types.d.ts#L7)

***

### lang?

> `optional` **lang**: `string`

#### Inherited from

`Omit.lang`

#### Defined in

node\_modules/@types/react/index.d.ts:2904

***

### LinkComponent?

> `optional` **LinkComponent**: `ElementType`\<`any`, keyof IntrinsicElements\>

The component used to render a link when the `href` prop is provided.

#### Default

```ts
'a'
```

#### Inherited from

`Omit.LinkComponent`

#### Defined in

node\_modules/@mui/material/ButtonBase/ButtonBase.d.ts:64

***

### name?

> `optional` **name**: `string`

#### Inherited from

`Omit.name`

#### Defined in

node\_modules/@types/react/index.d.ts:3147

***

### nonce?

> `optional` **nonce**: `string`

#### Inherited from

`Omit.nonce`

#### Defined in

node\_modules/@types/react/index.d.ts:2905

***

### onAbort?

> `optional` **onAbort**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onAbort`

#### Defined in

node\_modules/@types/react/index.d.ts:2439

***

### onAbortCapture?

> `optional` **onAbortCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onAbortCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2440

***

### onAnimationEnd?

> `optional` **onAnimationEnd**: `AnimationEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onAnimationEnd`

#### Defined in

node\_modules/@types/react/index.d.ts:2569

***

### onAnimationEndCapture?

> `optional` **onAnimationEndCapture**: `AnimationEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onAnimationEndCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2570

***

### onAnimationIteration?

> `optional` **onAnimationIteration**: `AnimationEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onAnimationIteration`

#### Defined in

node\_modules/@types/react/index.d.ts:2571

***

### onAnimationIterationCapture?

> `optional` **onAnimationIterationCapture**: `AnimationEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onAnimationIterationCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2572

***

### onAnimationStart?

> `optional` **onAnimationStart**: `AnimationEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onAnimationStart`

#### Defined in

node\_modules/@types/react/index.d.ts:2567

***

### onAnimationStartCapture?

> `optional` **onAnimationStartCapture**: `AnimationEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onAnimationStartCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2568

***

### onAuxClick?

> `optional` **onAuxClick**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onAuxClick`

#### Defined in

node\_modules/@types/react/index.d.ts:2487

***

### onAuxClickCapture?

> `optional` **onAuxClickCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onAuxClickCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2488

***

### onBeforeInput?

> `optional` **onBeforeInput**: `FormEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onBeforeInput`

#### Defined in

node\_modules/@types/react/index.d.ts:2411

***

### onBeforeInputCapture?

> `optional` **onBeforeInputCapture**: `FormEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onBeforeInputCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2412

***

### onBeforeToggle?

> `optional` **onBeforeToggle**: `ToggleEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onBeforeToggle`

#### Defined in

node\_modules/@types/react/canary.d.ts:131

***

### onBlur?

> `optional` **onBlur**: `FocusEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onBlur`

#### Defined in

node\_modules/@types/react/index.d.ts:2405

***

### onBlurCapture?

> `optional` **onBlurCapture**: `FocusEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onBlurCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2406

***

### onCanPlay?

> `optional` **onCanPlay**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onCanPlay`

#### Defined in

node\_modules/@types/react/index.d.ts:2441

***

### onCanPlayCapture?

> `optional` **onCanPlayCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onCanPlayCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2442

***

### onCanPlayThrough?

> `optional` **onCanPlayThrough**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onCanPlayThrough`

#### Defined in

node\_modules/@types/react/index.d.ts:2443

***

### onCanPlayThroughCapture?

> `optional` **onCanPlayThroughCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onCanPlayThroughCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2444

***

### onChange?

> `optional` **onChange**: `FormEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onChange`

#### Defined in

node\_modules/@types/react/index.d.ts:2409

***

### onChangeCapture?

> `optional` **onChangeCapture**: `FormEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onChangeCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2410

***

### onClick?

> `optional` **onClick**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onClick`

#### Defined in

node\_modules/@types/react/index.d.ts:2489

***

### onClickCapture?

> `optional` **onClickCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onClickCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2490

***

### onCompositionEnd?

> `optional` **onCompositionEnd**: `CompositionEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onCompositionEnd`

#### Defined in

node\_modules/@types/react/index.d.ts:2395

***

### onCompositionEndCapture?

> `optional` **onCompositionEndCapture**: `CompositionEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onCompositionEndCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2396

***

### onCompositionStart?

> `optional` **onCompositionStart**: `CompositionEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onCompositionStart`

#### Defined in

node\_modules/@types/react/index.d.ts:2397

***

### onCompositionStartCapture?

> `optional` **onCompositionStartCapture**: `CompositionEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onCompositionStartCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2398

***

### onCompositionUpdate?

> `optional` **onCompositionUpdate**: `CompositionEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onCompositionUpdate`

#### Defined in

node\_modules/@types/react/index.d.ts:2399

***

### onCompositionUpdateCapture?

> `optional` **onCompositionUpdateCapture**: `CompositionEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onCompositionUpdateCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2400

***

### onContextMenu?

> `optional` **onContextMenu**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onContextMenu`

#### Defined in

node\_modules/@types/react/index.d.ts:2491

***

### onContextMenuCapture?

> `optional` **onContextMenuCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onContextMenuCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2492

***

### onCopy?

> `optional` **onCopy**: `ClipboardEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onCopy`

#### Defined in

node\_modules/@types/react/index.d.ts:2387

***

### onCopyCapture?

> `optional` **onCopyCapture**: `ClipboardEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onCopyCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2388

***

### onCut?

> `optional` **onCut**: `ClipboardEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onCut`

#### Defined in

node\_modules/@types/react/index.d.ts:2389

***

### onCutCapture?

> `optional` **onCutCapture**: `ClipboardEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onCutCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2390

***

### onDoubleClick?

> `optional` **onDoubleClick**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDoubleClick`

#### Defined in

node\_modules/@types/react/index.d.ts:2493

***

### onDoubleClickCapture?

> `optional` **onDoubleClickCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDoubleClickCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2494

***

### onDrag?

> `optional` **onDrag**: `DragEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDrag`

#### Defined in

node\_modules/@types/react/index.d.ts:2495

***

### onDragCapture?

> `optional` **onDragCapture**: `DragEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDragCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2496

***

### onDragEnd?

> `optional` **onDragEnd**: `DragEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDragEnd`

#### Defined in

node\_modules/@types/react/index.d.ts:2497

***

### onDragEndCapture?

> `optional` **onDragEndCapture**: `DragEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDragEndCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2498

***

### onDragEnter?

> `optional` **onDragEnter**: `DragEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDragEnter`

#### Defined in

node\_modules/@types/react/index.d.ts:2499

***

### onDragEnterCapture?

> `optional` **onDragEnterCapture**: `DragEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDragEnterCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2500

***

### onDragExit?

> `optional` **onDragExit**: `DragEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDragExit`

#### Defined in

node\_modules/@types/react/index.d.ts:2501

***

### onDragExitCapture?

> `optional` **onDragExitCapture**: `DragEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDragExitCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2502

***

### onDragLeave?

> `optional` **onDragLeave**: `DragEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDragLeave`

#### Defined in

node\_modules/@types/react/index.d.ts:2503

***

### onDragLeaveCapture?

> `optional` **onDragLeaveCapture**: `DragEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDragLeaveCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2504

***

### onDragOver?

> `optional` **onDragOver**: `DragEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDragOver`

#### Defined in

node\_modules/@types/react/index.d.ts:2505

***

### onDragOverCapture?

> `optional` **onDragOverCapture**: `DragEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDragOverCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2506

***

### onDragStart?

> `optional` **onDragStart**: `DragEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDragStart`

#### Defined in

node\_modules/@types/react/index.d.ts:2507

***

### onDragStartCapture?

> `optional` **onDragStartCapture**: `DragEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDragStartCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2508

***

### onDrop?

> `optional` **onDrop**: `DragEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDrop`

#### Defined in

node\_modules/@types/react/index.d.ts:2509

***

### onDropCapture?

> `optional` **onDropCapture**: `DragEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDropCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2510

***

### onDurationChange?

> `optional` **onDurationChange**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDurationChange`

#### Defined in

node\_modules/@types/react/index.d.ts:2445

***

### onDurationChangeCapture?

> `optional` **onDurationChangeCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onDurationChangeCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2446

***

### onEmptied?

> `optional` **onEmptied**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onEmptied`

#### Defined in

node\_modules/@types/react/index.d.ts:2447

***

### onEmptiedCapture?

> `optional` **onEmptiedCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onEmptiedCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2448

***

### onEncrypted?

> `optional` **onEncrypted**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onEncrypted`

#### Defined in

node\_modules/@types/react/index.d.ts:2449

***

### onEncryptedCapture?

> `optional` **onEncryptedCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onEncryptedCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2450

***

### onEnded?

> `optional` **onEnded**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onEnded`

#### Defined in

node\_modules/@types/react/index.d.ts:2451

***

### onEndedCapture?

> `optional` **onEndedCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onEndedCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2452

***

### onError?

> `optional` **onError**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onError`

#### Defined in

node\_modules/@types/react/index.d.ts:2425

***

### onErrorCapture?

> `optional` **onErrorCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onErrorCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2426

***

### onFocus?

> `optional` **onFocus**: `FocusEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onFocus`

#### Defined in

node\_modules/@types/react/index.d.ts:2403

***

### onFocusCapture?

> `optional` **onFocusCapture**: `FocusEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onFocusCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2404

***

### onFocusVisible?

> `optional` **onFocusVisible**: `FocusEventHandler`\<`any`\>

Callback fired when the component is focused with a keyboard.
We trigger a `onFocus` callback too.

#### Inherited from

`Omit.onFocusVisible`

#### Defined in

node\_modules/@mui/material/ButtonBase/ButtonBase.d.ts:69

***

### onGotPointerCapture?

> `optional` **onGotPointerCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onGotPointerCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2553

***

### onGotPointerCaptureCapture?

> `optional` **onGotPointerCaptureCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onGotPointerCaptureCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2554

***

### onInput?

> `optional` **onInput**: `FormEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onInput`

#### Defined in

node\_modules/@types/react/index.d.ts:2413

***

### onInputCapture?

> `optional` **onInputCapture**: `FormEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onInputCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2414

***

### onInvalid?

> `optional` **onInvalid**: `FormEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onInvalid`

#### Defined in

node\_modules/@types/react/index.d.ts:2419

***

### onInvalidCapture?

> `optional` **onInvalidCapture**: `FormEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onInvalidCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2420

***

### onKeyDown?

> `optional` **onKeyDown**: `KeyboardEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onKeyDown`

#### Defined in

node\_modules/@types/react/index.d.ts:2429

***

### onKeyDownCapture?

> `optional` **onKeyDownCapture**: `KeyboardEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onKeyDownCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2430

***

### ~~onKeyPress?~~

> `optional` **onKeyPress**: `KeyboardEventHandler`\<`HTMLButtonElement`\>

#### Deprecated

Use `onKeyUp` or `onKeyDown` instead

#### Inherited from

`Omit.onKeyPress`

#### Defined in

node\_modules/@types/react/index.d.ts:2432

***

### ~~onKeyPressCapture?~~

> `optional` **onKeyPressCapture**: `KeyboardEventHandler`\<`HTMLButtonElement`\>

#### Deprecated

Use `onKeyUpCapture` or `onKeyDownCapture` instead

#### Inherited from

`Omit.onKeyPressCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2434

***

### onKeyUp?

> `optional` **onKeyUp**: `KeyboardEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onKeyUp`

#### Defined in

node\_modules/@types/react/index.d.ts:2435

***

### onKeyUpCapture?

> `optional` **onKeyUpCapture**: `KeyboardEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onKeyUpCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2436

***

### onLoad?

> `optional` **onLoad**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onLoad`

#### Defined in

node\_modules/@types/react/index.d.ts:2423

***

### onLoadCapture?

> `optional` **onLoadCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onLoadCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2424

***

### onLoadedData?

> `optional` **onLoadedData**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onLoadedData`

#### Defined in

node\_modules/@types/react/index.d.ts:2453

***

### onLoadedDataCapture?

> `optional` **onLoadedDataCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onLoadedDataCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2454

***

### onLoadedMetadata?

> `optional` **onLoadedMetadata**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onLoadedMetadata`

#### Defined in

node\_modules/@types/react/index.d.ts:2455

***

### onLoadedMetadataCapture?

> `optional` **onLoadedMetadataCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onLoadedMetadataCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2456

***

### onLoadStart?

> `optional` **onLoadStart**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onLoadStart`

#### Defined in

node\_modules/@types/react/index.d.ts:2457

***

### onLoadStartCapture?

> `optional` **onLoadStartCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onLoadStartCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2458

***

### onLostPointerCapture?

> `optional` **onLostPointerCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onLostPointerCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2555

***

### onLostPointerCaptureCapture?

> `optional` **onLostPointerCaptureCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onLostPointerCaptureCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2556

***

### onMouseDown?

> `optional` **onMouseDown**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onMouseDown`

#### Defined in

node\_modules/@types/react/index.d.ts:2511

***

### onMouseDownCapture?

> `optional` **onMouseDownCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onMouseDownCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2512

***

### onMouseEnter?

> `optional` **onMouseEnter**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onMouseEnter`

#### Defined in

node\_modules/@types/react/index.d.ts:2513

***

### onMouseLeave?

> `optional` **onMouseLeave**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onMouseLeave`

#### Defined in

node\_modules/@types/react/index.d.ts:2514

***

### onMouseMove?

> `optional` **onMouseMove**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onMouseMove`

#### Defined in

node\_modules/@types/react/index.d.ts:2515

***

### onMouseMoveCapture?

> `optional` **onMouseMoveCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onMouseMoveCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2516

***

### onMouseOut?

> `optional` **onMouseOut**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onMouseOut`

#### Defined in

node\_modules/@types/react/index.d.ts:2517

***

### onMouseOutCapture?

> `optional` **onMouseOutCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onMouseOutCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2518

***

### onMouseOver?

> `optional` **onMouseOver**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onMouseOver`

#### Defined in

node\_modules/@types/react/index.d.ts:2519

***

### onMouseOverCapture?

> `optional` **onMouseOverCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onMouseOverCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2520

***

### onMouseUp?

> `optional` **onMouseUp**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onMouseUp`

#### Defined in

node\_modules/@types/react/index.d.ts:2521

***

### onMouseUpCapture?

> `optional` **onMouseUpCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onMouseUpCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2522

***

### onPaste?

> `optional` **onPaste**: `ClipboardEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPaste`

#### Defined in

node\_modules/@types/react/index.d.ts:2391

***

### onPasteCapture?

> `optional` **onPasteCapture**: `ClipboardEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPasteCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2392

***

### onPause?

> `optional` **onPause**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPause`

#### Defined in

node\_modules/@types/react/index.d.ts:2459

***

### onPauseCapture?

> `optional` **onPauseCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPauseCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2460

***

### onPlay?

> `optional` **onPlay**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPlay`

#### Defined in

node\_modules/@types/react/index.d.ts:2461

***

### onPlayCapture?

> `optional` **onPlayCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPlayCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2462

***

### onPlaying?

> `optional` **onPlaying**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPlaying`

#### Defined in

node\_modules/@types/react/index.d.ts:2463

***

### onPlayingCapture?

> `optional` **onPlayingCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPlayingCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2464

***

### onPointerCancel?

> `optional` **onPointerCancel**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPointerCancel`

#### Defined in

node\_modules/@types/react/index.d.ts:2545

***

### onPointerCancelCapture?

> `optional` **onPointerCancelCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPointerCancelCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2546

***

### onPointerDown?

> `optional` **onPointerDown**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPointerDown`

#### Defined in

node\_modules/@types/react/index.d.ts:2539

***

### onPointerDownCapture?

> `optional` **onPointerDownCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPointerDownCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2540

***

### onPointerEnter?

> `optional` **onPointerEnter**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPointerEnter`

#### Defined in

node\_modules/@types/react/index.d.ts:2547

***

### onPointerLeave?

> `optional` **onPointerLeave**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPointerLeave`

#### Defined in

node\_modules/@types/react/index.d.ts:2548

***

### onPointerMove?

> `optional` **onPointerMove**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPointerMove`

#### Defined in

node\_modules/@types/react/index.d.ts:2541

***

### onPointerMoveCapture?

> `optional` **onPointerMoveCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPointerMoveCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2542

***

### onPointerOut?

> `optional` **onPointerOut**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPointerOut`

#### Defined in

node\_modules/@types/react/index.d.ts:2551

***

### onPointerOutCapture?

> `optional` **onPointerOutCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPointerOutCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2552

***

### onPointerOver?

> `optional` **onPointerOver**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPointerOver`

#### Defined in

node\_modules/@types/react/index.d.ts:2549

***

### onPointerOverCapture?

> `optional` **onPointerOverCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPointerOverCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2550

***

### onPointerUp?

> `optional` **onPointerUp**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPointerUp`

#### Defined in

node\_modules/@types/react/index.d.ts:2543

***

### onPointerUpCapture?

> `optional` **onPointerUpCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onPointerUpCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2544

***

### onProgress?

> `optional` **onProgress**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onProgress`

#### Defined in

node\_modules/@types/react/index.d.ts:2465

***

### onProgressCapture?

> `optional` **onProgressCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onProgressCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2466

***

### onRateChange?

> `optional` **onRateChange**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onRateChange`

#### Defined in

node\_modules/@types/react/index.d.ts:2467

***

### onRateChangeCapture?

> `optional` **onRateChangeCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onRateChangeCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2468

***

### onReset?

> `optional` **onReset**: `FormEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onReset`

#### Defined in

node\_modules/@types/react/index.d.ts:2415

***

### onResetCapture?

> `optional` **onResetCapture**: `FormEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onResetCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2416

***

### onResize?

> `optional` **onResize**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onResize`

#### Defined in

node\_modules/@types/react/index.d.ts:2469

***

### onResizeCapture?

> `optional` **onResizeCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onResizeCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2470

***

### onScroll?

> `optional` **onScroll**: `UIEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onScroll`

#### Defined in

node\_modules/@types/react/index.d.ts:2559

***

### onScrollCapture?

> `optional` **onScrollCapture**: `UIEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onScrollCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2560

***

### onSeeked?

> `optional` **onSeeked**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onSeeked`

#### Defined in

node\_modules/@types/react/index.d.ts:2471

***

### onSeekedCapture?

> `optional` **onSeekedCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onSeekedCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2472

***

### onSeeking?

> `optional` **onSeeking**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onSeeking`

#### Defined in

node\_modules/@types/react/index.d.ts:2473

***

### onSeekingCapture?

> `optional` **onSeekingCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onSeekingCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2474

***

### onSelect?

> `optional` **onSelect**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onSelect`

#### Defined in

node\_modules/@types/react/index.d.ts:2525

***

### onSelectCapture?

> `optional` **onSelectCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onSelectCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2526

***

### onStalled?

> `optional` **onStalled**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onStalled`

#### Defined in

node\_modules/@types/react/index.d.ts:2475

***

### onStalledCapture?

> `optional` **onStalledCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onStalledCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2476

***

### onSubmit?

> `optional` **onSubmit**: `FormEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onSubmit`

#### Defined in

node\_modules/@types/react/index.d.ts:2417

***

### onSubmitCapture?

> `optional` **onSubmitCapture**: `FormEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onSubmitCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2418

***

### onSuspend?

> `optional` **onSuspend**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onSuspend`

#### Defined in

node\_modules/@types/react/index.d.ts:2477

***

### onSuspendCapture?

> `optional` **onSuspendCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onSuspendCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2478

***

### onTimeUpdate?

> `optional` **onTimeUpdate**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTimeUpdate`

#### Defined in

node\_modules/@types/react/index.d.ts:2479

***

### onTimeUpdateCapture?

> `optional` **onTimeUpdateCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTimeUpdateCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2480

***

### onToggle?

> `optional` **onToggle**: `ToggleEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onToggle`

#### Defined in

node\_modules/@types/react/canary.d.ts:130

***

### onTouchCancel?

> `optional` **onTouchCancel**: `TouchEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTouchCancel`

#### Defined in

node\_modules/@types/react/index.d.ts:2529

***

### onTouchCancelCapture?

> `optional` **onTouchCancelCapture**: `TouchEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTouchCancelCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2530

***

### onTouchEnd?

> `optional` **onTouchEnd**: `TouchEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTouchEnd`

#### Defined in

node\_modules/@types/react/index.d.ts:2531

***

### onTouchEndCapture?

> `optional` **onTouchEndCapture**: `TouchEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTouchEndCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2532

***

### onTouchMove?

> `optional` **onTouchMove**: `TouchEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTouchMove`

#### Defined in

node\_modules/@types/react/index.d.ts:2533

***

### onTouchMoveCapture?

> `optional` **onTouchMoveCapture**: `TouchEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTouchMoveCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2534

***

### onTouchStart?

> `optional` **onTouchStart**: `TouchEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTouchStart`

#### Defined in

node\_modules/@types/react/index.d.ts:2535

***

### onTouchStartCapture?

> `optional` **onTouchStartCapture**: `TouchEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTouchStartCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2536

***

### onTransitionCancel?

> `optional` **onTransitionCancel**: `TransitionEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTransitionCancel`

#### Defined in

node\_modules/@types/react/canary.d.ts:116

***

### onTransitionCancelCapture?

> `optional` **onTransitionCancelCapture**: `TransitionEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTransitionCancelCapture`

#### Defined in

node\_modules/@types/react/canary.d.ts:117

***

### onTransitionEnd?

> `optional` **onTransitionEnd**: `TransitionEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTransitionEnd`

#### Defined in

node\_modules/@types/react/index.d.ts:2575

***

### onTransitionEndCapture?

> `optional` **onTransitionEndCapture**: `TransitionEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTransitionEndCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2576

***

### onTransitionRun?

> `optional` **onTransitionRun**: `TransitionEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTransitionRun`

#### Defined in

node\_modules/@types/react/canary.d.ts:118

***

### onTransitionRunCapture?

> `optional` **onTransitionRunCapture**: `TransitionEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTransitionRunCapture`

#### Defined in

node\_modules/@types/react/canary.d.ts:119

***

### onTransitionStart?

> `optional` **onTransitionStart**: `TransitionEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTransitionStart`

#### Defined in

node\_modules/@types/react/canary.d.ts:120

***

### onTransitionStartCapture?

> `optional` **onTransitionStartCapture**: `TransitionEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onTransitionStartCapture`

#### Defined in

node\_modules/@types/react/canary.d.ts:121

***

### onVolumeChange?

> `optional` **onVolumeChange**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onVolumeChange`

#### Defined in

node\_modules/@types/react/index.d.ts:2481

***

### onVolumeChangeCapture?

> `optional` **onVolumeChangeCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onVolumeChangeCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2482

***

### onWaiting?

> `optional` **onWaiting**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onWaiting`

#### Defined in

node\_modules/@types/react/index.d.ts:2483

***

### onWaitingCapture?

> `optional` **onWaitingCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onWaitingCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2484

***

### onWheel?

> `optional` **onWheel**: `WheelEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onWheel`

#### Defined in

node\_modules/@types/react/index.d.ts:2563

***

### onWheelCapture?

> `optional` **onWheelCapture**: `WheelEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.onWheelCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2564

***

### popover?

> `optional` **popover**: `""` \| `"auto"` \| `"manual"`

#### Inherited from

`Omit.popover`

#### Defined in

node\_modules/@types/react/canary.d.ts:127

***

### popoverTarget?

> `optional` **popoverTarget**: `string`

#### Inherited from

`Omit.popoverTarget`

#### Defined in

node\_modules/@types/react/canary.d.ts:129

***

### popoverTargetAction?

> `optional` **popoverTargetAction**: `"hide"` \| `"show"` \| `"toggle"`

#### Inherited from

`Omit.popoverTargetAction`

#### Defined in

node\_modules/@types/react/canary.d.ts:128

***

### prefix?

> `optional` **prefix**: `string`

#### Inherited from

`Omit.prefix`

#### Defined in

node\_modules/@types/react/index.d.ts:2924

***

### property?

> `optional` **property**: `string`

#### Inherited from

`Omit.property`

#### Defined in

node\_modules/@types/react/index.d.ts:2925

***

### radioGroup?

> `optional` **radioGroup**: `string`

#### Inherited from

`Omit.radioGroup`

#### Defined in

node\_modules/@types/react/index.d.ts:2914

***

### ref?

> `optional` **ref**: `null` \| (`instance`) => `void` \| () => `VoidOrUndefinedOnly` \| `RefObject`\<`HTMLButtonElement`\>

#### Inherited from

`Omit.ref`

#### Defined in

node\_modules/@types/react/index.d.ts:1619

***

### rel?

> `optional` **rel**: `string`

#### Inherited from

`Omit.rel`

#### Defined in

node\_modules/@types/react/index.d.ts:2926

***

### resource?

> `optional` **resource**: `string`

#### Inherited from

`Omit.resource`

#### Defined in

node\_modules/@types/react/index.d.ts:2927

***

### results?

> `optional` **results**: `number`

#### Inherited from

`Omit.results`

#### Defined in

node\_modules/@types/react/index.d.ts:2942

***

### rev?

> `optional` **rev**: `string`

#### Inherited from

`Omit.rev`

#### Defined in

node\_modules/@types/react/index.d.ts:2928

***

### role?

> `optional` **role**: `string`

#### Overrides

`Omit.role`

#### Defined in

[src/types/Button.types.d.ts:18](https://github.com/hiyaryan/the-cdj-ui/blob/66083ffd99c70e3de7b7a7a2d26584eb05be11c4/src/types/Button.types.d.ts#L18)

***

### security?

> `optional` **security**: `string`

#### Inherited from

`Omit.security`

#### Defined in

node\_modules/@types/react/index.d.ts:2943

***

### size?

> `optional` **size**: `OverridableStringUnion`\<`"large"` \| `"medium"` \| `"small"`, `ButtonPropsSizeOverrides`\>

The size of the component.
`small` is equivalent to the dense button styling.

#### Default

```ts
'medium'
```

#### Inherited from

`Omit.size`

#### Defined in

node\_modules/@mui/material/Button/Button.d.ts:68

***

### slot?

> `optional` **slot**: `string`

#### Inherited from

`Omit.slot`

#### Defined in

node\_modules/@types/react/index.d.ts:2906

***

### spellCheck?

> `optional` **spellCheck**: `Booleanish`

#### Inherited from

`Omit.spellCheck`

#### Defined in

node\_modules/@types/react/index.d.ts:2907

***

### startIcon?

> `optional` **startIcon**: `ReactNode`

Element placed before the children.

#### Inherited from

`Omit.startIcon`

#### Defined in

node\_modules/@mui/material/Button/Button.d.ts:72

***

### style?

> `optional` **style**: `CSSProperties`

#### Inherited from

`Omit.style`

#### Defined in

node\_modules/@mui/material/OverridableComponent.d.ts:61

***

### suppressContentEditableWarning?

> `optional` **suppressContentEditableWarning**: `boolean`

#### Inherited from

`Omit.suppressContentEditableWarning`

#### Defined in

node\_modules/@types/react/index.d.ts:2891

***

### suppressHydrationWarning?

> `optional` **suppressHydrationWarning**: `boolean`

#### Inherited from

`Omit.suppressHydrationWarning`

#### Defined in

node\_modules/@types/react/index.d.ts:2892

***

### sx?

> `optional` **sx**: `SxProps`\<`Theme`\>

The system prop that allows defining system overrides as well as additional CSS styles.

#### Overrides

`Omit.sx`

#### Defined in

[src/types/Button.types.d.ts:19](https://github.com/hiyaryan/the-cdj-ui/blob/66083ffd99c70e3de7b7a7a2d26584eb05be11c4/src/types/Button.types.d.ts#L19)

***

### tabIndex?

> `optional` **tabIndex**: `number`

#### Default

```ts
0
```

#### Overrides

`Omit.tabIndex`

#### Defined in

[src/types/Button.types.d.ts:17](https://github.com/hiyaryan/the-cdj-ui/blob/66083ffd99c70e3de7b7a7a2d26584eb05be11c4/src/types/Button.types.d.ts#L17)

***

### title?

> `optional` **title**: `string`

#### Inherited from

`Omit.title`

#### Defined in

node\_modules/@types/react/index.d.ts:2910

***

### TouchRippleProps?

> `optional` **TouchRippleProps**: `Partial`\<`TouchRippleProps`\>

Props applied to the `TouchRipple` element.

#### Inherited from

`Omit.TouchRippleProps`

#### Defined in

node\_modules/@mui/material/ButtonBase/ButtonBase.d.ts:81

***

### touchRippleRef?

> `optional` **touchRippleRef**: `Ref`\<`TouchRippleActions`\>

A ref that points to the `TouchRipple` element.

#### Inherited from

`Omit.touchRippleRef`

#### Defined in

node\_modules/@mui/material/ButtonBase/ButtonBase.d.ts:85

***

### translate?

> `optional` **translate**: `"yes"` \| `"no"`

#### Inherited from

`Omit.translate`

#### Defined in

node\_modules/@types/react/index.d.ts:2911

***

### type?

> `optional` **type**: `"button"` \| `"reset"` \| `"submit"`

#### Inherited from

`Omit.type`

#### Defined in

node\_modules/@types/react/index.d.ts:3148

***

### typeof?

> `optional` **typeof**: `string`

#### Inherited from

`Omit.typeof`

#### Defined in

node\_modules/@types/react/index.d.ts:2929

***

### unselectable?

> `optional` **unselectable**: `"on"` \| `"off"`

#### Inherited from

`Omit.unselectable`

#### Defined in

node\_modules/@types/react/index.d.ts:2944

***

### value?

> `optional` **value**: `string` \| `number` \| readonly `string`[]

#### Inherited from

`Omit.value`

#### Defined in

node\_modules/@types/react/index.d.ts:3149

***

### variant?

> `optional` **variant**: `OverridableStringUnion`\<`"text"` \| `"outlined"` \| `"contained"`, `ButtonPropsVariantOverrides`\>

The variant to use.

#### Default

```ts
'text'
```

#### Inherited from

`Omit.variant`

#### Defined in

node\_modules/@mui/material/Button/Button.d.ts:81

***

### vocab?

> `optional` **vocab**: `string`

#### Inherited from

`Omit.vocab`

#### Defined in

node\_modules/@types/react/index.d.ts:2930
