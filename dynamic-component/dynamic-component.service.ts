import {Injectable, ApplicationRef, Injector, EmbeddedViewRef} from '@angular/core';
import {ComponentFactoryResolver} from '@angular/core';

@Injectable()
export class DynamicComponentService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef,
              private injector: Injector) {

  }

  create(dyComponent: any) {

    const dyComponentFactory = this.componentFactoryResolver.resolveComponentFactory(dyComponent);
    const componentRef = dyComponentFactory.create(this.injector);

    this.applicationRef.attachView(componentRef.hostView);

    const domElement = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElement);

  }


}


