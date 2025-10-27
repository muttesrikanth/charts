
export interface CardInterface {
  name: string;
  company: string;
  role: string;
  package: number;
  email: string;
  dob: string;
  workMode: string;
  address: {
    addressLine: string;
    city: string;
    state: string;
    pincode: string;
  };
}
