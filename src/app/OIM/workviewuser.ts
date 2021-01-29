export class Workviewuser {
    loginId : string;
     supervisorId : String;
     modelId : String;
     computerName : String;
     DomainName : String;
     status : String;
     requestId : String;
     operatingSystem : String;
     citrixAccess: String;
     Department: String;
     BusinessGroup: String;
     Justification: String;
     id: number;
}

export interface WorkviewuserResolved {
    wvuser: Workviewuser;
    error?: any;
  }