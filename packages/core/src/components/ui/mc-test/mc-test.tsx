import { Component, Host, Method, Prop, h } from '@stencil/core';
import type { UIComponentValidation, validationType, UIProps } from '../../../types'

@Component({
  tag: 'mc-test',
  styleUrl: 'mc-test.css',
  shadow: true,
})
export class McTest implements UIProps {
  /* Required Props */
  @Prop() name!: string;

  /* Optional Props */
  @Prop() import_export_field: string = '';
  @Prop() mapper: string = '';
  @Prop() label: string = '';
  @Prop() placeholder: string = '';
  @Prop() error: string = '';
  @Prop() value: unknown;
  @Prop() disabled: boolean;
  @Prop() required: boolean;
  @Prop() save_only: boolean;
  @Prop() tab_ndex: number;

  /* Mutable Props */
  @Prop({ mutable: true }) validations: validationType[]
  @Prop({ mutable: true }) errorMessage: string;

  @Method()
  async validate(): Promise<boolean> {
    return Promise.resolve(true)
  }

  render() {
    return <Host>
      <div> I AM MCTEST</div>
    </Host>;
  }
}
