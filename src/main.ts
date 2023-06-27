import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ModuloPrincipal } from './ModuloPrincipal/ModuloPrincipal.module';

platformBrowserDynamic()
  .bootstrapModule(ModuloPrincipal)
  .catch((err) => console.error(err));
