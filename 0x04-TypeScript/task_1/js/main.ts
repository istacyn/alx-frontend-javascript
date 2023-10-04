interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const abbreviatedFirstName = firstName.charAt(0).toUpperCase() + '.';
  return `${abbreviatedFirstName} ${lastName}`;
};

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass);
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClassImpl implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  workOnHomework(): string {
    return 'Currently working';
  }
  
  displayName(): string {
    return this.firstName;
  }
}
