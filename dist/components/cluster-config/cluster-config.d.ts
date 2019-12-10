export declare class ClusterConfig {
    private backendSrv;
    private alertSrv;
    private $q;
    private $location;
    private $window;
    cluster: any;
    prometheusList: Array<any>;
    busy: boolean;
    $scope: any;
    pageReady: boolean;
    version: number;
    static templateUrl: string;
    constructor($scope: any, $injector: any, backendSrv: any, alertSrv: any, $q: any, $location: any, $window: any);
    getCluster(): void;
    getPrometheusList(): any;
    saveCluster(): any;
    check(): any;
    saveDatasource(): any;
    createDatasource(): any;
    updateDatasource(): any;
    getDatasource(id: any): any;
}
