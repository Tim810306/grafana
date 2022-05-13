import { getDefaultTimeRange } from '@grafana/data';

import { SceneAutoLayout } from '../models/SceneLayoutTiling';
import { SceneTimeRange } from '../models/SceneTimeRange';
import { Scene, ScenePanel } from '../models/scene';

export function getDemoScene(): Scene {
  const scene = new Scene({
    title: 'Hello',
    layout: new SceneAutoLayout({
      direction: 'column',
      children: [
        new ScenePanel({
          key: 'A',
          title: 'Panel 1',
        }),
        new SceneAutoLayout({
          key: 'B',
          direction: 'row',
          children: [
            new ScenePanel({
              key: '2',
              title: 'Panel 2',
            }),
            new ScenePanel({
              key: '3',
              title: 'Panel 3',
            }),
          ],
        }),
      ],
    }),
    timeRange: new SceneTimeRange({
      timeRange: getDefaultTimeRange(),
    }),
  });

  // function addDrilldown() {
  //   scene.setState({
  //     children: [
  //       ...scene.state.children,
  //       new ScenePanel({
  //         id: `${scene.state.children.length + 4}`,
  //         title: 'drilldown panel',
  //         width: 10,
  //         height: 5,
  //       }),
  //     ],
  //   });
  // }

  // setTimeout(() => {
  //   scene.setState({
  //     children: [
  //       new ScenePanel({
  //         id: '2',
  //         title: 'another panel',
  //         width: 10,
  //         height: 5,
  //       }),
  //       new ScenePanelButton({
  //         id: '3',
  //         width: 5,
  //         height: 2,
  //         buttonText: 'Drilldown',
  //         onClick: addDrilldown,
  //       }),
  //     ],
  //   });
  // }, 2000);

  setTimeout(() => {
    scene.setState({
      title: 'New title',
    });
  }, 10000);

  return scene;
}

// function getDynamicPanel(): ScenePanel {
//   // let counter = 0;
//   const panel = new ScenePanel({
//     title: 'A panel',
//     id: '1',
//     width: 10,
//     height: 5
//   });

//   setInterval(() => {
//     panel.update({
//       title: 'A panel ' + counter,
//       height: panel.props.height + counter,
//     })
//   }, 1000)

//   return panel;
// }

// import React from 'react';
// import { CoreApp, DataQueryRequest, dateMath, LoadingState, PanelData, TimeRange } from '@grafana/data';

// export function getDemoScene(name: string): Observable<Scene> {
//   return new Observable<Scene>(observer => {
//     const scene: Scene = {
//       title: `Demo ${name}`,
//       panels: [],
//     };

//     observer.next(scene);

//     const sub = getDemoData().subscribe({
//       next: (data) => {

//         const panels = data.series.map((series, index) => {
//           return of({
//             id: `data-${index}`,
//             type: 'viz',
//             title: series.name,
//             gridPos: { x: 0, y: index, w: 24, h: 5 },
//             data: of({
//               ...data,
//               series: [series]
//             })
//           } as VizPanel);
//         })

//         console.log('got data', data, panels);
//         observer.next({
//           ...scene,
//           panels,
//         })
//       }
//     })

//     return () => {
//       sub.unsubscribe();
//       console.log('teardown');
//     }
//   });

//   // const onAddNested = () => {
//   //   panels.push(
//   //     of({
//   //       id: newUuid(),
//   //       title: 'inner scene',
//   //       type: 'scene',
//   //       gridPos: { x: 12, y: 1, w: 12, h: 1 },
//   //       panels: getDemoPanels(),
//   //     })
//   //   );
//   //   observer.next(panels);
//   // };

//   // panels.push(
//   //   of({
//   //     id: 'button3',
//   //     type: 'component',
//   //     gridPos: { x: 12, y: 1, w: 12, h: 1 },
//   //     component: () => <Button onClick={onAddNested}>Add nested scene</Button>,
//   //   })
//   // );

//   // return new Observable<SceneItemList>(observer => {
//   //   const panels: SceneItem[] = [];

//   //   const onButtonHit = () => {
//   //     panels.push({
//   //       id: panels.length.toString(),
//   //       type: 'scene',
//   //       title: 'Nested scene',
//   //       gridPos: { x: 0, y: 3, w: 12, h: 10 },
//   //       panels: getDemoScene('nested').pipe(mergeMap(scene => scene.panels)),
//   //     });
//   //     observer.next([...panels]);
//   //   };

//   //   const onQuery = () => {
//   //     panels.push({
//   //       id: 'nestedScene',
//   //       type: 'scene',
//   //       title: 'Query scene',
//   //       gridPos: { x: 0, y: 3, w: 12, h: 10 },
//   //       panels: getQueryPanels(),
//   //     });
//   //     observer.next([...panels]);
//   //   };

//   //   panels.push({
//   //     id: 'A',
//   //     type: 'viz',
//   //     title: 'Demo panel',
//   //     vizId: 'bar-gauge',
//   //     gridPos: { x: 0, y: 0, w: 12, h: 3 },
//   //     data: of({
//   //       state: LoadingState.Done,
//   //       series: [],
//   //       timeRange: {} as TimeRange,
//   //     } as PanelData),
//   //   });

//   //   panels.push({
//   //     id: 'button',
//   //     type: 'component',
//   //     gridPos: { x: 12, y: 0, w: 12, h: 1 },
//   //     component: () => <Button onClick={onButtonHit}>Hit me</Button>,
//   //   });

//   //   panels.push({
//   //     id: 'button2',
//   //     type: 'component',
//   //     gridPos: { x: 12, y: 1, w: 12, h: 1 },
//   //     component: () => <Button onClick={onQuery}>Query stuff</Button>,
//   //   });

//   //   observer.next(panels);
//   // });
// }

// // function getDemoPanel(): Observable<SceneItem> {
// //   return new Observable<SceneItem>(observer => {
// //     const panel: VizPanel = {
// //       id: newUuid(),
// //       type: 'viz',
// //       title: 'Demo panel',
// //       vizId: 'bar-gauge',
// //       gridPos: { x: 0, y: 0, w: 12, h: 5 },
// //       data: of({
// //         state: LoadingState.Done,
// //         series: [],
// //         timeRange: {} as TimeRange,
// //       } as PanelData),
// //     };

// //     // setInterval(() => {
// //     //   observer.next({
// //     //     ...panel,
// //     //     title: 'Demo panel ' + counter++,
// //     //   });
// //     // }, 2000);

// //     observer.next(panel);
// //   });
// // }

// // function getQueryPanels(): Observable<SceneItem[]> {
// //   return getDemoData().pipe(
// //     map(data => {
// //       return data.series.map((series, index) => {
// //         return {
// //           id: `data-${index}`,
// //           type: 'viz',
// //           title: series.name,
// //           gridPos: { x: 0, y: index, w: 24, h: 1 },
// //           data: of({
// //             ...data,
// //             series: [series]
// //           })
// //         } as VizPanel;
// //       });
// //     })
// //   );
// // }

// function getDemoData(): Observable<PanelData> {
//   return new Observable<PanelData>(observer => {
//     const request: DataQueryRequest = {
//       app: CoreApp.Dashboard,
//       requestId: 'request',
//       timezone: 'browser',
//       range: {
//         from: dateMath.parse('now-1h', false)!,
//         to: dateMath.parse('now', false)!,
//         raw: { from: 'now-1h', to: 'now' },
//       },
//       interval: '10s',
//       intervalMs: 1000,
//       targets: [
//         {
//           alias: '__house_locations',
//           refId: 'A',
//           scenarioId: 'random_walk',
//           seriesCount: 5,
//         } as any,
//       ],
//       maxDataPoints: 500,
//       scopedVars: {},
//       startTime: Date.now(),
//     };

//     const subscription = new Subscription();

//     getDatasourceSrv()
//       .get('gdev-testdata')
//       .then(ds => {
//         subscription.add(runRequest(ds, request).subscribe(observer));
//       });

//     return subscription;
//   });
// }