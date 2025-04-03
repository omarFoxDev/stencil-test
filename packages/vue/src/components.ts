/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer, defineStencilSSRComponent, type StencilVueComponent } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@placid/core';

import { defineCustomElement as defineMcTest } from '@placid/core/components/mc-test.js';


export const McTest: StencilVueComponent<JSX.McTest> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.McTest>('mc-test', defineMcTest, [
  'name',
  'import_export_field',
  'mapper',
  'label',
  'placeholder',
  'error',
  'value',
  'disabled',
  'required',
  'save_only',
  'tab_ndex',
  'validations',
  'errorMessage'
]) : defineStencilSSRComponent<JSX.McTest>({
  tagName: 'mc-test',
  hydrateModule: import('@placid/core/hydrate'),
  props: {
    'name': [String, "name"],
    'import_export_field': [String, "import_export_field"],
    'mapper': [String, "mapper"],
    'label': [String, "label"],
    'placeholder': [String, "placeholder"],
    'error': [String, "error"],
    'disabled': [Boolean, "disabled"],
    'required': [Boolean, "required"],
    'save_only': [Boolean, "save_only"],
    'tab_ndex': [Number, "tab_ndex"],
    'errorMessage': [String, "error-message"]
  }
});

