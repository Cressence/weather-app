export default interface Weather {
    temperature: number;
    pressure: number;
    description: string;
    icon: string;
    date: string;
    humidity: number;
    tempCollection: any[]
  }