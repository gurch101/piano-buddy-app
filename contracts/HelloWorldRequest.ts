import { IsNotEmpty } from "class-validator";

export default class HelloWorldRequest {
  @IsNotEmpty()
  name: string;
}
