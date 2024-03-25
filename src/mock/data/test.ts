import { BodyCreateUserUserPost } from '@/apis/data-contracts';
import { createMock } from 'ts-auto-mock';

const CreateUserUserPost = createMock<BodyCreateUserUserPost>();

export const MockApi = {
  CreateUserUserPost,
};
