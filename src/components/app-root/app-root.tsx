import { Component, h,  } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {


  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route routeRender={({ history: { location } }) => (
              <div>
              <stencil-route-redirect url="/" />
              <route-transition
                items={location}
                keys={location.key}
                config={{ duration: 800, timing: 'cubic-bezier(0.63, 1, 0.620, 1)' }} //cubic-bezier(0.23, 1, 0.320, 1)
                from={{  opacity: '0', transform: 'translateY(15px) scale(1.05)' }}
                enter={{ opacity: '1',   transform: 'translateY(0px) scale(1)'  }}
                leave={{ opacity: '0', transform: 'translateY(15px) scale(1.05)' }}
                renderFunction={(style, loc ) => {
                return (

                  <stencil-route-switch location={loc ? {...loc} : location} scrollTopOffset={0}>
                    <stencil-route url="/" component="app-home" exact={true} componentProps={style} 
                      routeRender={(props) => (
                        <app-home 
                          {...props} 
                          styles={style}
                        />
                      )}
                    />
                   <stencil-route url="/profile/:name" component="app-profile" componentProps={style} 
                    routeRender={(props) => (
                      <app-profile 
                          {...props}
                          styles={style} 
                        />
                      )} 
                    /> 
                    <stencil-route component="catch-404" componentProps={style} routeRender={() => (<catch-404 />)} />
                  </stencil-route-switch>
                )}}
              />
              </div> 
              )}
            />
            
          </stencil-router>
        </main>
      </div>
    );
  }
}
