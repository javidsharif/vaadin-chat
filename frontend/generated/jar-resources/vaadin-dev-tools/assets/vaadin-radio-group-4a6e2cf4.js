import{s as e,E as i,p as d,i as p,t as r}from"../vaadin-dev-tools.js";import{labelProperties as s,helperTextProperties as l,errorMessageProperties as n}from"./vaadin-text-field-e82c445d.js";import"construct-style-sheets-polyfill";import"lit";import"lit/decorators.js";import"lit/directives/class-map.js";import"lit/static-html.js";const N={tagName:"vaadin-radio-group",displayName:"RadioButtonGroup",elements:[{selector:"vaadin-radio-group",displayName:"Group",properties:[e.backgroundColor,e.borderColor,e.borderWidth,e.borderRadius,e.padding]},{selector:"vaadin-radio-group::part(label)",displayName:"Label",properties:s},{selector:"vaadin-radio-group::part(helper-text)",displayName:"Helper text",properties:l},{selector:"vaadin-radio-group::part(error-message)",displayName:"Error message",properties:n},{selector:"vaadin-radio-group vaadin-radio-button",displayName:"Radio buttons",properties:[{propertyName:"--vaadin-radio-button-size",displayName:"Radio button size",defaultValue:"var(--lumo-font-size-l)",editorType:i.range,presets:d.lumoFontSize,icon:"square"}]},{selector:"vaadin-radio-group vaadin-radio-button::part(radio)",displayName:"Radio part",properties:[e.backgroundColor,e.borderColor,e.borderWidth]},{selector:"vaadin-radio-group vaadin-radio-button[checked]::part(radio)",stateAttribute:"checked",stateElementSelector:"vaadin-radio-group vaadin-radio-button",displayName:"Radio part (when checked)",properties:[e.backgroundColor,e.borderColor,e.borderWidth]},{selector:"vaadin-radio-group vaadin-radio-button::part(radio)::after",displayName:"Selection indicator",properties:[{...p.iconColor,propertyName:"border-color"}]},{selector:"vaadin-radio-group vaadin-radio-button label",displayName:"Label",properties:[r.textColor,r.fontSize,r.fontWeight,r.fontStyle]}],setupElement(t){const a=document.createElement("vaadin-radio-button"),o=document.createElement("label");o.textContent="Some label",o.setAttribute("slot","label"),a.append(o),t.append(a)}};export{N as default};
