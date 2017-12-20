//#region App
declare interface LaunchOptions {
  query: any;
  path: string;
}
declare type Showoptions = LaunchOptions;
declare interface AppParams {
  onLaunch?: (LaunchOptions?: any) => void;
  onShow?: (Showoptions?: any) => void;
  onHide?: () => void;
  onError?: () => void;
  globalData?: {
    [props: string]: any;
  };
  [props: string]: any;
}
declare function App(appParams: AppParams): void;

declare type Appinstance = AppParams;
declare function getApp(): Appinstance;
//#endregion

//#region Page
declare interface PageParams {
  data?: { [props: string]: any; } | Function;
  onLoad?: (query: any) => void;
  onReady?: () => void;
  onShow?: () => void;
  onHide?: () => void;
  onUnload?: () => void;
  onTitleClick?: () => void;
  onPullDownRefresh?: () => void;
  onReachBottom?: () => void;
  onShareAppMessage?: () => void;
  [props: string]: any;
}
declare function Page(params: PageParams): void;
declare function getCurrentPages(): any;
//#endregion

//#region namespace my
declare namespace my {
  interface Error {
    error: number|string;
    msg: string;
  }

  interface commonParams<T> {
    success?: (res?: T) => void;
    fail?: (error?: Error | any) => void;
    complete?: (res?: any) => void;
    [props: string]: any;
  }

  //#region Navigation Bar
  interface NavigateToParams extends commonParams<null> {
    url: string;
  }
  export function navigateTo(params: NavigateToParams): void;

  type RedirectToParams = NavigateToParams;
  export function redirectTo(params: RedirectToParams): void;

  interface NavigateBackParams extends commonParams<null> {
    delta: number;
  }
  export function navigateBack(params: NavigateBackParams): void;

  type RelaunchParams = NavigateToParams;
  export function reLaunch(params: RelaunchParams): void;

  interface SetNavigationBarParams extends commonParams<null> {
    title?: string;
    backgroundColor?: string;
    borderBottomColor?: string;
    reset?: boolean;
  }
  export function setNavigationBar(params: SetNavigationBarParams): void;

  export function showNavigationBarLoading(): void;
  export function hideNavigationBarLoading(): void;
  //#endregion

  //#region Tab Bar
  type SwitchTabParams = NavigateToParams;
  export function switchTab(params: SwitchTabParams): void;

  interface AlertParams extends commonParams<null> {
    title?: string;
    content?: string;
    buttonText?: string;
  }
  export function alert(params: AlertParams): void;
  //#endregion

  //#region Interactive feedback
  interface ConfirmParams extends commonParams<{ confirm: boolean }> {
    title?: string;
    content?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
  }
  export function confirm(params: ConfirmParams): void;
  interface ShowToastParams extends commonParams<null> {
    content?: string;
    delay?: number;
  }
  export function showToast(params: ShowToastParams): void;
  export function hideToast(): void;

  interface ShowLoadingParams extends commonParams<null> {
    type?: string;
    content?: string;
    duration?: number;
  }
  export function showLoading(params: ShowLoadingParams): void;
  export function hideLoading(): void;

  export function showNavigationBarLoading(): void;
  export function hideNavigationBarLoading(): void;

  interface ShowActionSheetParams extends commonParams<{ index: number }> {
    title?: string;
    items: string[];
    cancelButtonText?: string;
    destructiveBtnIndex: number;
  }
  export function showActionSheet(params: ShowActionSheetParams): void;
  //#endregion

  //#region Pull-Refresh
  export function onPullDownRefresh(): void;
  export function stopPullDownRefresh(): void;
  //#endregion

  //#region Contact
  interface ChoosePhoneContactSuccess {
    name: string;
    mobile: string;
  }
  type ChoosePhoneContactParams = commonParams<ChoosePhoneContactSuccess>;
  export function choosePhoneContact(params: ChoosePhoneContactParams): void;

  interface Contact {
    realName: string;
    mobile: string;
    email: string;
    avatar: string;
    userId: string;
  }
  interface Contacts {
    contacts: Contact[];
  }
  interface ChooseAlipayContactParams extends commonParams<Contacts>{
    count?: number;
  }
  export function chooseAlipayContact(params: ChooseAlipayContactParams): void;

  interface contactsDic {
    userId: string;
    avatar: string;
    mobile: string;
    realName: string;
    displayName: string;
  }
  interface ChooseContactParams extends commonParams<{ contactsDicArray: contactsDic[] }> {
    chooseType: 'single' | 'multi';
    includeMobileContactMode?: string;
    includeMe?: boolean;
    multiChooseMax?: number;
    multiChooseMaxTips?: string;
  }
  export function chooseContact(params: ChooseContactParams): void;
  //#endregion

  //#region Choose City
  interface City {
    city: string;
    adCode: string;
    spell: string;
  }
  interface ChooseCitySuccess {
    city: string;
    adCode: string;
  }
  interface ChooseCityParams extends commonParams<ChooseCitySuccess> {
    showLocatedCity?: boolean;
    showHotCities?: boolean;
    cities?: City[];
    hotCities?: City[];
  }
  export function chooseCity(params: ChooseCityParams): void;
  //#endregion

  //#region Choose Date
  interface DatePickerSuccess {
    date: string;
  }
  interface DatePickerParams extends commonParams<DatePickerSuccess> {
    format?: 'yyyy-MM-dd' | 'HH:mm' | 'yyyy-MM-dd HH:mm' | 'yyyy-MM' | 'yyyy' | string;
    currentDate?: string;
    startDate?: string;
    endDate?: string;
  }
  export function datePicker(params: DatePickerParams): void;
  //#endregion

  //#region Animation
  interface Animation {
    opacity(value: number): Animation;
    backgroundColor(color: string): Animation;
    width(length: number | string): Animation;
    height(length: number | string): Animation;
    top(length: number | string): Animation;
    left(length: number | string): Animation;
    bottom(length: number | string): Animation;
    right(length: number | string): Animation;

    rotate(deg: number): Animation;
    rotateX(deg: number): Animation;
    rotateY(deg: number): Animation;
    rotateZ(deg: number): Animation;
    rotate3d(x: number, y: number, z: number): Animation;

    scale(sx: number, xy?: number): Animation;
    scaleX(sx: number): Animation;
    scaleY(sy: number): Animation;
    scaleZ(sz: number): Animation;
    scale3d(sx: number, sy: number, sz: number): Animation;

    translate(sx: number, xy?: number): Animation;
    translateX(sx: number): Animation;
    translateY(sy: number): Animation;
    translateZ(sz: number): Animation;
    translate3d(sx: number, sy: number, sz: number): Animation;

    skew(ax: number, ay?: number): Animation;
    skewX(ax: number): Animation;
    skewY(ay: number): Animation;

    matrix(a: number, b: number, c: number, d: number, tx: number, ty: number): Animation;
    matrix3d(...arg: any[]): Animation;

    export(): any;
  }

  interface AnimationOptions {
    duration?: number;
    timingFunction?: "linear" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-start" | "step-end" | string;
    delay?: number;
    transformOrigin?: string;
  }  
  export function createAnimation(params: AnimationOptions): Animation;
  //endregion

  //#region Canvas
  interface ToTempFilePathParams extends commonParams<string> {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    destWidth?: number;
    destHeight?: number;
  }
  interface CanvasContext {
    toTempFilePath(params: ToTempFilePathParams): void;
    setTextAlign(params: "left" | "right" | "center" | "start" | "end" | string): void;
    setTextBaseline(params: "top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom" | string): void;
    setFillStyle(color: string): void;
    setStrokeStyle(color: string): void;
    setShadow(offsetX: number, offsetY: number, blur: number, color: string): void;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): void;
    createCircularGradient(x: number, y: number, r: number): void;
    addColorStop(stop: number, color: string): void;
    setLineWidth(lineWidth: number): void;
    setLineCap(lineCap: 'round' | 'butt' | 'square' | string): void;
    setLineJoin(lineJoin: 'round' | 'bevel' | 'miter' | string): void;
    setMiterLimit(miterLimit: number): void;
    rect(x: number, y: number, width: number, height: number): void;
    fillRect(x: number, y: number, width: number, height: number): void;
    strokeRect(x: number, y: number, width: number, height: number): void;
    clearRect(x: number, y: number, width: number, height: number): void;
    fill(): void;
    stroke(): void;
    beginPath(): void;
    closePath(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    arc(x: number, y: number, r: number, sAngle: number, eAngle: number, counterclockwise: boolean): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    clip(): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    scale(scaleWidth: number, scaleHeight: number): void;
    rotate(rotate: number): void;
    translate(x: number, y: number): void;
    setFontSize(fontSize: number): void;
    fillText(text: string, x: number, y: number): void;
    drawImage(imageResource: string, x: number, y: number, width: number, height: number): void;
    setGlobalAlpha(alpha: number): void;
    save(): void;
    restore(): void;
    draw(reserve?: boolean): void;
  }
  export function createCanvasContext(canvasId: String): CanvasContext;
  //#endregion

  //#region Map
  interface GetCenterLocationSuccess {
    longitude: string;
    latitude: string;
  }
  interface MapContext {
    getCenterLocation(obj: commonParams<GetCenterLocationSuccess>): void;
    moveToLocation(): void;
  }
  export function createMapContext(mapId: string): MapContext;
  //#endregion

  //#region KeyBoard
  export function hideKeyboard(): void;
  //#endregion

  //#region Scroll
  export function pageScrollTo(params: { scrollTop: number }): void;
  //#endregion

  //#region Nodes Query
  interface SelectorQuery {
    select(selector: string): SelectorQuery;
    selectAll(selector: string): SelectorQuery;
    selectViewport(): SelectorQuery;
    boundingClientRect(): SelectorQuery;
    scrollOffset(): SelectorQuery;
    exec(callback: Function): void;
  }
  export function createSelectorQuery(params?: any): SelectorQuery;
  //#endregion

  //#region User Authorization
  interface GetAuthCodeSuccess {
    authCode: string;
    authErrorScope: any;
    authSucessScope: any[];
  }
  type Scope = 'auth_base' | 'auth_user' | 'auth_zhima';
  interface GetAuthCodeParams extends commonParams<GetAuthCodeSuccess> {
    scopes: Scope | Scope[];
  }
  export function getAuthCode(params: GetAuthCodeParams): void;
  //#endregion

  //#region Client User Info
  interface GetAuthUserInfoSuccess {
    nickName: string;
    avatar: string;
  }
  export function getAuthUserInfo(params: commonParams<GetAuthUserInfoSuccess>): void;
  //#endregion

  //#region Launch Pay Action
  interface TradePaySuccess {
    resultCode: string;
  }
  interface TradePayParams extends commonParams<TradePaySuccess> {
    orderStr?: string;
    tradeNO?: string;
  }
  export function tradePay(params: TradePayParams): void;
  //#endregion

  //#region Card List
  export function openCardList(): void;
  export function openMerchantCardList(params: { partnerId: string }): void;
  export function openCardDetail(params: { passId: string }): void;
  export function openVoucherList(): void;
  export function openMerchantVoucherList(params: { partnerId: string }): void;

  interface OpenVoucherDetailParams {
    passId?: string;
    partnerId?: string;
    serialNumber?: string;
  }
  export function openVoucherDetail(params: OpenVoucherDetailParams): void;

  type OpenKBVoucherDetailParams = OpenVoucherDetailParams
  export function openKBVoucherDetail(params: OpenKBVoucherDetailParams): void;

  export function openTicketList(): void;
  export function openMerchantTicketList(params: { partnerId: string }): void;

  type OpenTicketDetailParams = OpenVoucherDetailParams;
  export function openTicketDetail(params: OpenTicketDetailParams): void;
  //#endregion

  //#region Card Auth
  interface AddCardAuthSuccessResult {
    app_id: string;
    auth_code: string;
    state: string;
    scope: string;
    template_id: string;
    request_id: string;
    out_string: string;
  }
  interface AddCardAuthSuccess {
    success: boolean;
    resultStatus?: string;
    result?: AddCardAuthSuccessResult;
    code?: string;
  }
  interface AddCardAuthParams extends commonParams<AddCardAuthSuccess> {
    url: string;
  }
  export function addCardAuth(params: AddCardAuthParams): void;
  //#endregion

  //#region ZM verify
  interface StartZMVerifySuccess {
    bizNo: string;
    passed: string;
    failed_reason: string;
  }
  interface StartZMVerifyParams extends commonParams<StartZMVerifySuccess> {
    bizNo: string;
  }
  export function startZMVerify(params: StartZMVerifyParams): void;
  //endregion

  //#region ZM Credit Borrow
  interface ZmCreditBorrowSuccess {
    invoke_state: string;
    out_order_no: string;
    order_no: string;
    admit_state: string;
    user_id: string;
    resultStatus: string;
  }
  interface ZmCreditBorrowParams extends commonParams<ZmCreditBorrowSuccess> {
    out_order_no: string;
    product_code: string;
    goods_name: string;
    rent_unit: string;
    rent_amount: string;
    deposit_amount: string;
    deposit_state: string;
    invoke_return_url: string;
    invoke_type: 'TINYAPP' | 'WINDOWS';
    credit_biz: string;
    borrow_time?: string;
    expiry_time?: string;
    mobile_no?: string;
    borrow_shop_name?: string;
    rent_settle_type?: string;
    invoke_state?: string;
    rent_info?: string;
    name?: string;
    cert_no?: string;
    address?: string;
  }
  export function zmCreditBorrow(params: ZmCreditBorrowParams): void;
  //#endregion

  //#region Image
  type Source = 'camera' | 'album';
  interface ChooseImageParams extends commonParams<{ apFilePaths: string[] }> {
    count?: number;
    sourceType: Source[]
  }
  export function chooseImage(params: ChooseImageParams): void;

  interface PreviewImageParams extends commonParams<null> {
    urls: string[];
    current?: number;
  }
  export function previewImage(params: PreviewImageParams): void;

  interface SaveImageParams extends commonParams<null> {
    url: string;
    showActionSheet?: boolean;
  }
  export function saveImage(params: SaveImageParams): void;
  //#endregion

  //#region Cache
  interface SetStorageParams extends commonParams<null> {
    key: string;
    data: any;
  }
  export function setStorage(params: SetStorageParams): void;
  export function setStorageSync(params: { key: string, data: any }): void;

  interface GetStorageParams extends commonParams<{ data: any }> {
    key: string;
  }
  export function getStorage(params: GetStorageParams): void;
  export function getStorageSync(params: { key: string }): { data: any };

  interface RemoveStorageParams extends commonParams<null> {
    key: string;
  }
  export function removeStorage(params: RemoveStorageParams): void;
  export function removeStorageSync(params: { key: string }): void;

  export function clearStorage(): void;
  export function clearStorageSync(): void;

  interface GetStorageInfoSuccess {
    keys: string[];
    currentSize: number;
    limitSize: number;
  }
  export function getStorageInfo(params: commonParams<GetStorageInfoSuccess>): void;

  type getStorageInfoSyncSuccess = GetStorageInfoSuccess;
  export function getStorageInfoSync(): getStorageInfoSyncSuccess;
  //#endregion

  //#region File
  export function saveFile(params: commonParams<{ apFilePath: string; }>): { apFilePath: string; };
  export function getSavedFileInfo(params: commonParams<{ apFilePath: string; }>): { size: number; createTime: number; };

  interface File {
    size: number;
    createTime: number;
    apFilePath: string;
  }
  export function getSavedFileList(params: commonParams<{ fileList: File[]; }>): void;

  export function removeSavedFile(params: commonParams<{ apFilePath: string; }>): void;
  //#endregion

  //#region Location
  interface GetLocationSuccess {
    longitude: string;
    latitude: string;
    accuracy: string;
    horizontalAccuracy: string;
    country: string;
    countryCode: string;
    province: string;
    city: string;
    cityAdcode: string;
    district: string;
    districtAdcode: string;
    streetNumber: any;
    pois: any;
  }
  interface GetLocationParams extends commonParams<GetLocationSuccess> {
    cacheTimeout?: number;
    type?: 1 | 2 | 3;
  }
  export function getLocation(params: GetLocationParams): void;

  interface OpenLocationParams extends commonParams<null> {
    longitude: string;
    latitude: string;
    name: string;
    address: string;
    scale?: number;
  }
  export function openLocation(params: OpenLocationParams): void;
  //#endregion

  //#region Network
  interface HttpRequestSuccess {
    data: string | object;
    status: number;
    headers: object;
  }
  interface HttpRequestParams extends commonParams<HttpRequestSuccess> {
    url: string;
    headers?: object;
    method?: string;
    data?: object;
    timeout?: number;
    dataType?: 'json' | 'text' | 'base64';
  }
  export function httpRequest(params: HttpRequestParams): void;

  type UploadFileSuccess = HttpRequestSuccess;
  interface UploadFileParams extends commonParams<UploadFileSuccess> {
    url: string;
    filePath: string;
    fileName: string;
    fileType: 'image' | 'video' | 'audio' | string;
    header?: object;
    formData?: object;
  }
  export function uploadFile(params: UploadFileParams): void;

  interface downloadFile extends commonParams<{ apFilePath: string }> {
    url: string;
    header?: object;
  }
  export function downloadFile(params: downloadFile): void;

  interface ConnectSocketParams extends commonParams<null> {
    url: string;
    data?: object;
    header?: object
  }
  export function connectSocket(params: ConnectSocketParams): void;

  type Callback<T> = (res: T) => void;

  export function onSocketOpen(callback: Callback<any>): void;
  export function offSocketOpen(): void;
  export function onSocketError(callback: Callback<any>): void;
  export function offSocketError(): void;
  export function offSocketMessage(): void;
  export function onSocketClose(callback: Callback<null>): void;
  export function offSocketClose(): void;

  interface SendSocketMessageParams extends commonParams<null> {
    data: string | ArrayBuffer;
  }
  export function sendSocketMessage(params: SendSocketMessageParams): void;

  export function onSocketMessage(callback: Callback<{ data: string | ArrayBuffer }>): void;
  export function closeSocket(): void;
  //#endregion

  //#region Device
  export const SDKVersion: any;
  export function canIUse(key: string): boolean;

  interface getSystemInfoSuccess {
    model: string;
    pixelRatio: number;
    windowWidth: number;
    windowHeight: number;
    language: string;
    version: string;
    storage: string;
    currentBattery: string;
    system: string;
    platform: string;
    screeWidth: number;
    screenHeight: number;
  }
  export function getSystemInfo(params: commonParams<getSystemInfoSuccess>): void;

  type GetSystemInfoSyncResult = getSystemInfoSuccess;
  export function getSystemInfoSync(): GetSystemInfoSyncResult;

  export function getNetworkType(params: commonParams<{ networkAvailable: boolean; networkType: string; }>): void;

  export function getClipboard(params: commonParams<{ text: string; }>): void;

  interface SetClipboardParams extends commonParams<null> {
    text: string;
  }
  export function setClipboard(params: SetClipboardParams): void;

  export function watchShake(params: commonParams<null>): void;
  export function vibrate(params: commonParams<null>): void;

  interface makePhoneCallParams extends commonParams<null> {
    number: number;
  }
  export function makePhoneCall(params: makePhoneCallParams): void;

  export function getServerTime(params: commonParams<{ time: number; }>): void;

  export function onUserCaptureScreen(callback: Callback<null>): void;
  export function offUserCaptureScreen(): void;

  interface setKeepScreenOnParams extends commonParams<null> {
    keepScreenOn: boolean;
  }
  export function setKeepScreenOn(params: setKeepScreenOnParams): void;

  export function getScreenBrightness(params: commonParams<any>): void;

  interface SetScreenBrightnessParams extends commonParams<any> {
    brightness: number;
  }
  export function setScreenBrightness(params: SetScreenBrightnessParams): void;
  //#endregion

  //#region Scan Code
  interface ScanSuccess {
    code: string;
    qrCode?: string;
    barCode?: string;
  }
  interface ScanParams extends commonParams<ScanSuccess> {
    type: 'qr' | 'bar';
  }
  export function scan(params: ScanParams): void;
  //#endregion

  //region Data Safe
  interface RsaSuccess {
    text: string;
  }
  interface RsaParams extends commonParams<RsaSuccess> {
    action: 'encrypy' | 'decrypt';
    text: string;
    key: string;
  }
  export function rsa(params: RsaParams): void;
  //endregion

  //region Custom Analytic
  export function reportAnalytics(eventName: string, data: object): void;
  //#endregion

  //region Bluetooth
  interface OpenBluetoothAdapterParams extends commonParams<{ isSupportBLE: boolean }> {
    autoClose?: boolean;
  }
  export function openBluetoothAdapter(params: OpenBluetoothAdapterParams): void;
  export function closeBluetoothAdapter(pramsn: commonParams<null>): void;
  export function getBluetoothAdapterState(params: commonParams<{ discovering: boolean; available: boolean; }>): void;

  interface StartBluetoothDevicesDiscoveryParams extends commonParams<null> {
    services?: string[];
    allowDuplicatesKey?: boolean;
    interval?: number;
  }
  export function startBluetoothDevicesDiscovery(params: StartBluetoothDevicesDiscoveryParams): void;
  export function stopBluetoothDevicesDiscovery(params: commonParams<null>): void;

  interface Device {
    name: string;
    deviceName: string;
    localName: string;
    deviceId: string;
    RSSI: number;
    advertisData: string;
    manufacturerData: string;
  }
  export function getBluetoothDevices(params: commonParams<{ devices: Device[] }>): void;

  interface GetConnectedBluetoothDevicesParams extends commonParams<{ devices: Device[] }> {
    services: string[];
  }
  export function getConnectedBluetoothDevices(params: GetConnectedBluetoothDevicesParams): void;

  interface ConnectBLEDeviceParams extends commonParams<null> {
    deviceId: string;
  }
  export function connectBLEDevice(params: ConnectBLEDeviceParams): void;

  type DisconnectBLEDeviceParams = ConnectBLEDeviceParams;
  export function disconnectBLEDevice(params: DisconnectBLEDeviceParams): void;

  interface WriteBLECharacteristicValueParams extends commonParams<null> {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    value: string;
  }
  export function writeBLECharacteristicValue(params: WriteBLECharacteristicValueParams): void;

  interface Characteristic {
    characteristicId: string;
    serviceId: string;
    value: string;
  }
  interface ReadBLECharacteristicValueParams extends commonParams<Characteristic> {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
  }
  export function readBLECharacteristicValue(params: ReadBLECharacteristicValueParams): void;

  interface NotifyBLECharacteristicValueChangeParams extends commonParams<null> {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    descriptorId?: string;
    state?: boolean;
  }
  export function notifyBLECharacteristicValueChange(params: NotifyBLECharacteristicValueChangeParams): void;

  interface Service {
    serviceId: string;
    isPrimary: boolean;
  }
  interface GetBLEDeviceServicesParams extends commonParams<Service> {
    deviceId: string;
  }
  export function getBLEDeviceServices(params: GetBLEDeviceServicesParams): void;

  interface GetBLEDeviceCharacteristicsDetail extends Characteristic {
    properties: {
      read: boolean;
      write: boolean;
      notify: boolean;
      indicate: boolean;
    };
  }
  interface GetBLEDeviceCharacteristicsSuccess {
    characteristics: GetBLEDeviceCharacteristicsDetail[];
  }
  interface  GetBLEDeviceCharacteristicsParams extends commonParams<GetBLEDeviceCharacteristicsSuccess> {
    deviceId: string;
    serviceId: string;
  }
  export function getBLEDeviceCharacteristics(params: GetBLEDeviceCharacteristicsParams): void;

  export function onBluetoothDeviceFound(callback: Callback<{ devices: Device[] }>): void;
  export function offBluetoothDeviceFound(): void;

  interface BLECharacteristicValueChange {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    value: string;
  }
  export function onBLECharacteristicValueChange(callback: Callback<BLECharacteristicValueChange>): void;
  export function offBLECharacteristicValueChange(): void;

  export function onBLEConnectionStateChanged(callback: Callback<{ deviceId: string; connected: boolean; }>): void;
  export function offBLEConnectionStateChanged(): void;

  export function onBluetoothAdapterStateChange(callback: Callback<{ available: boolean; discovering: boolean; }>): void;
  export function offBluetoothAdapterStateChange(): void;
  //endregion
}
//#endregion