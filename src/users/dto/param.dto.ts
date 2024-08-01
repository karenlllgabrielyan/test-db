import { ApiProperty } from '@nestjs/swagger';

export class ParamDto {
  @ApiProperty({
    example: '74fcc9df-fd81-4b89-bcaa-4911a3377ca9',
    description: 'User id',
  })
  id: string;
}
