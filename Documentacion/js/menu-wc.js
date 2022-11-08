'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Documentacion</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Escribe para buscar"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Comenzando</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Descripción general
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>Léeme
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencias
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Propiedades
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Documentacion Adicional</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/a-title.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-e8a2ba1194ad2494a2d647ca59893ae413af3e3a53089bd6baebcba0ae2636de6cf489e2d9378d747adab58d8dd3d2a13614d5ed22213630e42c6eba84cabe32"' : 'data-target="#xs-additional-page-e8a2ba1194ad2494a2d647ca59893ae413af3e3a53089bd6baebcba0ae2636de6cf489e2d9378d747adab58d8dd3d2a13614d5ed22213630e42c6eba84cabe32"' }>
                                                <span class="link-name">A TITLE</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-e8a2ba1194ad2494a2d647ca59893ae413af3e3a53089bd6baebcba0ae2636de6cf489e2d9378d747adab58d8dd3d2a13614d5ed22213630e42c6eba84cabe32"' : 'id="xs-additional-page-e8a2ba1194ad2494a2d647ca59893ae413af3e3a53089bd6baebcba0ae2636de6cf489e2d9378d747adab58d8dd3d2a13614d5ed22213630e42c6eba84cabe32"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/a-title/a-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">A 1</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/a-title/a-2.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">A 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/b-title.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-3b3df5da6644d5a6353003c26de14defac9f900bc6b51db0899aae7db9d89164ef3283cc17e928a61cf8ae7df4bed0395bd2373688404cdad5ea8f5830b42d9f"' : 'data-target="#xs-additional-page-3b3df5da6644d5a6353003c26de14defac9f900bc6b51db0899aae7db9d89164ef3283cc17e928a61cf8ae7df4bed0395bd2373688404cdad5ea8f5830b42d9f"' }>
                                                <span class="link-name">B TITLE</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-3b3df5da6644d5a6353003c26de14defac9f900bc6b51db0899aae7db9d89164ef3283cc17e928a61cf8ae7df4bed0395bd2373688404cdad5ea8f5830b42d9f"' : 'id="xs-additional-page-3b3df5da6644d5a6353003c26de14defac9f900bc6b51db0899aae7db9d89164ef3283cc17e928a61cf8ae7df4bed0395bd2373688404cdad5ea8f5830b42d9f"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/b-title/b-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">B 1</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/b-title/b-2.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">B 2</a>
                                            </li>
                                        </ul>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Módulos</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutModule.html" data-type="entity-link" >AboutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutModule-852595e6292aab95eb3b68e8dde9bb0e8943a9877dc89b25a25aad38e9fd735daaf956594f2b215bb76a33435cc00f428b2f6d3b7dbb8a50ca13fee8f59ff2a3"' : 'data-target="#xs-components-links-module-AboutModule-852595e6292aab95eb3b68e8dde9bb0e8943a9877dc89b25a25aad38e9fd735daaf956594f2b215bb76a33435cc00f428b2f6d3b7dbb8a50ca13fee8f59ff2a3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutModule-852595e6292aab95eb3b68e8dde9bb0e8943a9877dc89b25a25aad38e9fd735daaf956594f2b215bb76a33435cc00f428b2f6d3b7dbb8a50ca13fee8f59ff2a3"' :
                                            'id="xs-components-links-module-AboutModule-852595e6292aab95eb3b68e8dde9bb0e8943a9877dc89b25a25aad38e9fd735daaf956594f2b215bb76a33435cc00f428b2f6d3b7dbb8a50ca13fee8f59ff2a3"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AboutRoutingModule.html" data-type="entity-link" >AboutRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-6825023c5abdb3e9d73232c2eb11ccf1517e9efaabf5d2b75bbde7550ff60654a20c95de12e2ffd9e785de51e2120e2c0a06b527702c36c2568799dbfa6e2a9c"' : 'data-target="#xs-components-links-module-AppModule-6825023c5abdb3e9d73232c2eb11ccf1517e9efaabf5d2b75bbde7550ff60654a20c95de12e2ffd9e785de51e2120e2c0a06b527702c36c2568799dbfa6e2a9c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6825023c5abdb3e9d73232c2eb11ccf1517e9efaabf5d2b75bbde7550ff60654a20c95de12e2ffd9e785de51e2120e2c0a06b527702c36c2568799dbfa6e2a9c"' :
                                            'id="xs-components-links-module-AppModule-6825023c5abdb3e9d73232c2eb11ccf1517e9efaabf5d2b75bbde7550ff60654a20c95de12e2ffd9e785de51e2120e2c0a06b527702c36c2568799dbfa6e2a9c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-0cac09f74e8ff0782bc757406659b1bd45d1fcf1bf28309f48e5c2ea7a5359df0a6c9b74b3a860a8dfd7322f1aa5dbc4e67e72f014739037deaa867f0ab58268"' : 'data-target="#xs-components-links-module-ComponentsModule-0cac09f74e8ff0782bc757406659b1bd45d1fcf1bf28309f48e5c2ea7a5359df0a6c9b74b3a860a8dfd7322f1aa5dbc4e67e72f014739037deaa867f0ab58268"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-0cac09f74e8ff0782bc757406659b1bd45d1fcf1bf28309f48e5c2ea7a5359df0a6c9b74b3a860a8dfd7322f1aa5dbc4e67e72f014739037deaa867f0ab58268"' :
                                            'id="xs-components-links-module-ComponentsModule-0cac09f74e8ff0782bc757406659b1bd45d1fcf1bf28309f48e5c2ea7a5359df0a6c9b74b3a860a8dfd7322f1aa5dbc4e67e72f014739037deaa867f0ab58268"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-ComponentsModule-0cac09f74e8ff0782bc757406659b1bd45d1fcf1bf28309f48e5c2ea7a5359df0a6c9b74b3a860a8dfd7322f1aa5dbc4e67e72f014739037deaa867f0ab58268"' : 'data-target="#xs-pipes-links-module-ComponentsModule-0cac09f74e8ff0782bc757406659b1bd45d1fcf1bf28309f48e5c2ea7a5359df0a6c9b74b3a860a8dfd7322f1aa5dbc4e67e72f014739037deaa867f0ab58268"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Tuberías</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ComponentsModule-0cac09f74e8ff0782bc757406659b1bd45d1fcf1bf28309f48e5c2ea7a5359df0a6c9b74b3a860a8dfd7322f1aa5dbc4e67e72f014739037deaa867f0ab58268"' :
                                            'id="xs-pipes-links-module-ComponentsModule-0cac09f74e8ff0782bc757406659b1bd45d1fcf1bf28309f48e5c2ea7a5359df0a6c9b74b3a860a8dfd7322f1aa5dbc4e67e72f014739037deaa867f0ab58268"' }>
                                            <li class="link">
                                                <a href="pipes/DomSecurePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DomSecurePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/YoutubePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YoutubePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link" >ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactModule-6eeb0208a0f9b44065ca9fbc7bc02764a6c5ee69d264ef8b39a539356e851745e46ee030f4f87e683d599c8d15ac8754d5a7cd27b1560e273ab145ee681034ca"' : 'data-target="#xs-components-links-module-ContactModule-6eeb0208a0f9b44065ca9fbc7bc02764a6c5ee69d264ef8b39a539356e851745e46ee030f4f87e683d599c8d15ac8754d5a7cd27b1560e273ab145ee681034ca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactModule-6eeb0208a0f9b44065ca9fbc7bc02764a6c5ee69d264ef8b39a539356e851745e46ee030f4f87e683d599c8d15ac8754d5a7cd27b1560e273ab145ee681034ca"' :
                                            'id="xs-components-links-module-ContactModule-6eeb0208a0f9b44065ca9fbc7bc02764a6c5ee69d264ef8b39a539356e851745e46ee030f4f87e683d599c8d15ac8754d5a7cd27b1560e273ab145ee681034ca"' }>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactRoutingModule.html" data-type="entity-link" >ContactRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesModule.html" data-type="entity-link" >CoursesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoursesModule-44df376a5208d7acf625328eaec4d9adf8827bf0320d7c69c86a6b48b92c12a02e4276726129fafc801ee46fc5ca6ca01d3aa84a882835f7f43df0f85dc66189"' : 'data-target="#xs-components-links-module-CoursesModule-44df376a5208d7acf625328eaec4d9adf8827bf0320d7c69c86a6b48b92c12a02e4276726129fafc801ee46fc5ca6ca01d3aa84a882835f7f43df0f85dc66189"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoursesModule-44df376a5208d7acf625328eaec4d9adf8827bf0320d7c69c86a6b48b92c12a02e4276726129fafc801ee46fc5ca6ca01d3aa84a882835f7f43df0f85dc66189"' :
                                            'id="xs-components-links-module-CoursesModule-44df376a5208d7acf625328eaec4d9adf8827bf0320d7c69c86a6b48b92c12a02e4276726129fafc801ee46fc5ca6ca01d3aa84a882835f7f43df0f85dc66189"' }>
                                            <li class="link">
                                                <a href="components/CoursesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoursesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesRoutingModule.html" data-type="entity-link" >CoursesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-cabf7ea34172f4031f22015ca3ff2adc3439f895eff978830fa319544dfe3bb9377747c7c5f87733acb660c8a7c0b23f5fe076bd00c8892d7ed08750b5d7fd6c"' : 'data-target="#xs-components-links-module-HomeModule-cabf7ea34172f4031f22015ca3ff2adc3439f895eff978830fa319544dfe3bb9377747c7c5f87733acb660c8a7c0b23f5fe076bd00c8892d7ed08750b5d7fd6c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-cabf7ea34172f4031f22015ca3ff2adc3439f895eff978830fa319544dfe3bb9377747c7c5f87733acb660c8a7c0b23f5fe076bd00c8892d7ed08750b5d7fd6c"' :
                                            'id="xs-components-links-module-HomeModule-cabf7ea34172f4031f22015ca3ff2adc3439f895eff978830fa319544dfe3bb9377747c7c5f87733acb660c8a7c0b23f5fe076bd00c8892d7ed08750b5d7fd6c"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PortfolioModule.html" data-type="entity-link" >PortfolioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PortfolioModule-bec911f70579e9b2192624d9e2ffac5cac82112199541737daa5fcb2f3cabbc6a8904d0c8d69616b27acb77f8935fa2e280fe8b5b668491e8ce23c8010f25cc9"' : 'data-target="#xs-components-links-module-PortfolioModule-bec911f70579e9b2192624d9e2ffac5cac82112199541737daa5fcb2f3cabbc6a8904d0c8d69616b27acb77f8935fa2e280fe8b5b668491e8ce23c8010f25cc9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PortfolioModule-bec911f70579e9b2192624d9e2ffac5cac82112199541737daa5fcb2f3cabbc6a8904d0c8d69616b27acb77f8935fa2e280fe8b5b668491e8ce23c8010f25cc9"' :
                                            'id="xs-components-links-module-PortfolioModule-bec911f70579e9b2192624d9e2ffac5cac82112199541737daa5fcb2f3cabbc6a8904d0c8d69616b27acb77f8935fa2e280fe8b5b668491e8ce23c8010f25cc9"' }>
                                            <li class="link">
                                                <a href="components/PortfolioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PortfolioComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PortfolioRoutingModule.html" data-type="entity-link" >PortfolioRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PostModule-86dbe904b5dd062bb9a41efda3c1f44045d21ef5c0c29292415f0a63c51fc756bcedd4345b4581aad93b95054d3ad8bc53f20db4f18fa4acd43ae2fea15b538e"' : 'data-target="#xs-components-links-module-PostModule-86dbe904b5dd062bb9a41efda3c1f44045d21ef5c0c29292415f0a63c51fc756bcedd4345b4581aad93b95054d3ad8bc53f20db4f18fa4acd43ae2fea15b538e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PostModule-86dbe904b5dd062bb9a41efda3c1f44045d21ef5c0c29292415f0a63c51fc756bcedd4345b4581aad93b95054d3ad8bc53f20db4f18fa4acd43ae2fea15b538e"' :
                                            'id="xs-components-links-module-PostModule-86dbe904b5dd062bb9a41efda3c1f44045d21ef5c0c29292415f0a63c51fc756bcedd4345b4581aad93b95054d3ad8bc53f20db4f18fa4acd43ae2fea15b538e"' }>
                                            <li class="link">
                                                <a href="components/PostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostRoutingModule.html" data-type="entity-link" >PostRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SidebarModule.html" data-type="entity-link" >SidebarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SidebarModule-26ba5269e0ccb7764ce43a0975219b2b02e579ed8d768d5290e22368d445c1bedc6dbc9f2c19aa810c2ec3c51488c6a5183aeedd265339071f9b4f8c8c9f1265"' : 'data-target="#xs-components-links-module-SidebarModule-26ba5269e0ccb7764ce43a0975219b2b02e579ed8d768d5290e22368d445c1bedc6dbc9f2c19aa810c2ec3c51488c6a5183aeedd265339071f9b4f8c8c9f1265"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SidebarModule-26ba5269e0ccb7764ce43a0975219b2b02e579ed8d768d5290e22368d445c1bedc6dbc9f2c19aa810c2ec3c51488c6a5183aeedd265339071f9b4f8c8c9f1265"' :
                                            'id="xs-components-links-module-SidebarModule-26ba5269e0ccb7764ce43a0975219b2b02e579ed8d768d5290e22368d445c1bedc6dbc9f2c19aa810c2ec3c51488c6a5183aeedd265339071f9b4f8c8c9f1265"' }>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Inyectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link" >ConfigService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/SharedElement.html" data-type="entity-link" >SharedElement</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscelánea</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Cobertura de la documentación</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});