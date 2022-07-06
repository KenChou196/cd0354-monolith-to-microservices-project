// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Udagram',
  apiHost: 'http://localhost:8080/api/v0' // add end point ( expose Ip)
  // apiHost: 'http://a38f75fd0939444068c90d26aed63410-664023834.us-east-1.elb.amazonaws.com/api/v0' // add end point ( expose Ip)
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 * 
 * Run these commands from the /udagram-frontend directory to add new docker image with new apiHost
 * 
 * docker build . -t kynkdev/udagram-frontend:v6
 * docker push kynkdev/udagram-frontend:v6
 * Run these commands from the /udagram-deployment directory
 * Rolling update the containers of "frontend" deployment
   kubectl set image deployment udagram-frontend udagram-frontend=kynkdev/udagram-frontend:v6


* Policy for S3
      "Principal":"*","Action":"s3:*","Effect":"Allow"

 */

/**
 *  Expose IP of front end and reverseproxy
 * 
 *  kubectl expose deployment udagram-frontend --type=LoadBalancer --name=service-expose-ip
 *  kubectl expose deployment udagram-reverseproxy --type=LoadBalancer --name=service-expose-ip-2
 * 
 * 
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
