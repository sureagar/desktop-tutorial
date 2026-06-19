// Generate Emp Data using Faker Library
import { faker } from '@faker-js/faker';

export type Employee = {
  firstName: string;
  lastName: string;
  email: string;
};

export function generateEmployee(): Employee {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });
  return { firstName, lastName, email };
}

export function generateEmployees(count = 5): Employee[] {
  return Array.from({ length: count }, () => generateEmployee());
}

// If run directly (e.g., `npx ts-node DataHandle/GenerateData.ts 3`), print sample output
if (require.main === module) {
  const count = Number(process.argv[2] ?? 5);
  console.log(JSON.stringify(generateEmployees(count), null, 2));
}
