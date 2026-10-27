import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceComics } from './services/service.comics';
import { ComicsComponent } from './components/comics-component/comics-component';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ServiceCoches } from './services/service.coches';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple-component/plantilla-funcion-simple-component';
import { ServicePlantilla } from './services/services.plantilla';
import { FormsModule } from '@angular/forms';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcion-multiple-component/plantilla-funcion-multiple-component';
@NgModule({
  declarations: [
    App,
    ComicsComponent,
    PersonasApiComponent,
    MenuComponent,
    CochesApiComponent,
    PlantillaFuncionSimpleComponent,
    PlantillaFuncionMultipleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ServiceComics,
    provideHttpClient(),
    ServicePersonas,
    ServiceCoches,
    ServicePlantilla,
  ],
  bootstrap: [App],
})
export class AppModule {}
