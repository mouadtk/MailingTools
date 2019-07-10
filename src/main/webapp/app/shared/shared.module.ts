import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WarmappSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [WarmappSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [WarmappSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WarmappSharedModule {
  static forRoot() {
    return {
      ngModule: WarmappSharedModule
    };
  }
}
