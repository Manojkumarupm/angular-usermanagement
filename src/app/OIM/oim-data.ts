import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Workviewuser } from './workviewuser';

export class OimData implements InMemoryDbService {

  createDb(): { Workviewusers: Workviewuser[] } {
    const Workviewusers: Workviewuser[] = [
      {
        id: 1,
        requestId: 'Request Id 1',
        loginId: 'm9peru',
        supervisorId: 'm9bask',
        modelId: 'm9bask',
        computerName: 'NA679',
        DomainName: 'ACE',
        status: 'NEW REQUEST',
        operatingSystem: 'Windows-7',
        citrixAccess: 'No',
        Department: 'Claims',
        BusinessGroup: 'Genpact users',
        Justification: 'newly added genpact users who need access to the system'
      },
      {
        id: 2,
        requestId: 'Request Id 2',
        loginId: 'p9cs11',
        supervisorId: 'm9bask',
        modelId: 'm9bask',
        computerName: 'NA679s',
        DomainName: 'ACE',
        status: 'NEW REQUEST',
        operatingSystem: 'Windows-10',
        citrixAccess: 'No',
        Department: 'Claims',
        BusinessGroup: 'Genpact users',
        Justification: 'newly added genpact users who need access to the system'
      },
      {
        id: 3,
        requestId: 'Request Id 3',
        loginId: 'k9sub3',
        supervisorId: 'm9bask',
        modelId: 'm9bask',
        computerName: 'NA679s',
        DomainName: 'ACE',
        status: 'NEW REQUEST',
        operatingSystem: 'Windows-10',
        citrixAccess: 'No',
        Department: 'Claims',
        BusinessGroup: 'Genpact users',
        Justification: 'newly added genpact users who need access to the system'
      },
      {
        id: 4,
        requestId: 'Request Id 4',
        loginId: 'f9moni',
        supervisorId: 'm9bask',
        modelId: 'm9bask',
        computerName: 'NA6795',
        DomainName: 'ACE',
        status: 'OIM STATUS PENDING',
        operatingSystem: 'Windows-10',
        citrixAccess: 'No',
        Department: 'Claims',
        BusinessGroup: 'Genpact users',
        Justification: 'newly added genpact users who need access to the system'
      },
      {
        id: 5,
        requestId: 'Request Id 5',
        loginId: 'r9nama',
        supervisorId: 'm9bask',
        modelId: 'm9bask',
        computerName: 'NA6795',
        DomainName: 'ACE',
        status: 'OIM STATUS PENDING',
        operatingSystem: 'Windows-10',
        citrixAccess: 'No',
        Department: 'Claims',
        BusinessGroup: 'Genpact users',
        Justification: 'newly added genpact users who need access to the system'
      },
      {
        id: 6,
        requestId: 'Request Id 5',
        loginId: 'r9nama',
        supervisorId: 'm9bask',
        modelId: 'm9bask',
        computerName: 'NA6795',
        DomainName: 'ACE',
        status: 'OIM STATUS PENDING',
        operatingSystem: 'Windows-10',
        citrixAccess: 'No',
        Department: 'Claims',
        BusinessGroup: 'Genpact users',
        Justification: 'newly added genpact users who need access to the system'
      },
      {
        id: 7,
        requestId: 'Request Id 5',
        loginId: 'r9nama',
        supervisorId: 'm9bask',
        modelId: 'm9bask',
        computerName: 'NA6795',
        DomainName: 'ACE',
        status: 'OIM STATUS PENDING',
        operatingSystem: 'Windows-10',
        citrixAccess: 'No',
        Department: 'Claims',
        BusinessGroup: 'Genpact users',
        Justification: 'newly added genpact users who need access to the system'
      },
      {
        id: 8,
        requestId: 'Request Id 5',
        loginId: 'r9nama',
        supervisorId: 'm9bask',
        modelId: 'm9bask',
        computerName: 'NA6795',
        DomainName: 'ACE',
        status: 'OIM STATUS PENDING',
        operatingSystem: 'Windows-10',
        citrixAccess: 'No',
        Department: 'Claims',
        BusinessGroup: 'Genpact users',
        Justification: 'newly added genpact users who need access to the system'
      }
    ];
    return { Workviewusers };
  }
}
