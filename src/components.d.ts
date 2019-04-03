/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
} from '@stencil/router';


export namespace Components {

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'match': MatchResults;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface MyBackdrop {}
  interface MyBackdropAttributes extends StencilHTMLAttributes {}

  interface MyFirstComponent {
    'name': string;
  }
  interface MyFirstComponentAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }

  interface MyModal {
    'content': string;
    'open': () => void;
    'title': string;
  }
  interface MyModalAttributes extends StencilHTMLAttributes {
    'content'?: string;
    'title'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppHome': Components.AppHome;
    'AppProfile': Components.AppProfile;
    'AppRoot': Components.AppRoot;
    'MyBackdrop': Components.MyBackdrop;
    'MyFirstComponent': Components.MyFirstComponent;
    'MyModal': Components.MyModal;
  }

  interface StencilIntrinsicElements {
    'app-home': Components.AppHomeAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-root': Components.AppRootAttributes;
    'my-backdrop': Components.MyBackdropAttributes;
    'my-first-component': Components.MyFirstComponentAttributes;
    'my-modal': Components.MyModalAttributes;
  }


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLMyBackdropElement extends Components.MyBackdrop, HTMLStencilElement {}
  var HTMLMyBackdropElement: {
    prototype: HTMLMyBackdropElement;
    new (): HTMLMyBackdropElement;
  };

  interface HTMLMyFirstComponentElement extends Components.MyFirstComponent, HTMLStencilElement {}
  var HTMLMyFirstComponentElement: {
    prototype: HTMLMyFirstComponentElement;
    new (): HTMLMyFirstComponentElement;
  };

  interface HTMLMyModalElement extends Components.MyModal, HTMLStencilElement {}
  var HTMLMyModalElement: {
    prototype: HTMLMyModalElement;
    new (): HTMLMyModalElement;
  };

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
    'my-backdrop': HTMLMyBackdropElement
    'my-first-component': HTMLMyFirstComponentElement
    'my-modal': HTMLMyModalElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'my-backdrop': HTMLMyBackdropElement;
    'my-first-component': HTMLMyFirstComponentElement;
    'my-modal': HTMLMyModalElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
