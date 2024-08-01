import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'John',
    description: "User's name",
  })
  name: string;

  @ApiProperty({
    example: 'Smith',
    description: "User's surname",
  })
  surname: string;
}
