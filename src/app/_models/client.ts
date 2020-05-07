export class Client {
  _id: string;
  name: string;
  email: string;
  idCode: number;
  isCompany: boolean;
  company?: string;
  phone: number;
  address?: string;

  constructor(
    public _Name: string,
    public _Email: string,
    public _IdCode: number,
    public _Phone: number,
    public _IsCompany: boolean,
    public _Address?: string,
    public _Company?: string,
    // public _CompanyName?: string,
    // public _CompanyCode?: string,
    // public _CompanyEmail?: string,
  ){ 
    this.name = this._Name;
    this.email = this._Email;
    this.idCode = this._IdCode,   
    this.isCompany = this._IsCompany,
    this.company = this._Company,
    this.phone = this._Phone,
    this.address = this._Address      
   }
    
  
  }

  // export class Client {
  //   _id: string;
  //   name: string;
  //   email: string;
  //   idCode: number;
  //   isCompany: boolean;
  //   company?: string;
  //   phone: number;
  //   address?: string;
  
  //   constructor(
  //     name: string,
  //     email: string,
  //     idCode: number,
  //     isCompany: boolean,
  //     company?: string,
  //     phone?: number,
  //     address?: string,
  //   ) {
  //     this.name = this.name;
  //     this.email = this.email;
  //     this.idCode = this.idCode,
  //       this.isCompany = this.isCompany,
  //       this.company = this.company,
  //       this.phone = this.phone,
  //       this.address = this.address
  //   }