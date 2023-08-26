import { parse as uuidParse, v4 as uuidv4 } from 'uuid';

export const getUniqueId = () => {
  let id = uuidv4(); // Using v4 to generate a random UUID
  return id;
}
