---
to: src/components/<%=folder%>/<%=componentDomName%>/<%=componentDomName%>.tsx
unless_exists: true
---
import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: '<%=componentDomName%>',
  styleUrl: '<%=componentDomName%>.css',
  shadow: true,
})
export class <%=name%> {
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
  @Prop() tab_index: number;

  /* Mutable Props */
  @Prop({ mutable: true }) validations: validationType[]
  @Prop({ mutable: true }) errorMessage: string;

  public validate(): Promise<UIComponentValidation> {
    return Promise.resolve({
      errors: this.errorMessage ? [ this.errorMessage ] : [],
      data:[
        {
          value: this.errorMessage ? null : [] ,
          import_export_field: this.import_export_field
        },
      ],
      name: this.name
    })
  }

  render() {
    return <Host>
    </Host>;
  }
}
