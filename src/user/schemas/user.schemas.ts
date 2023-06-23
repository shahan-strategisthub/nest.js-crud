import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  email: string;

  @Prop()
  cell_phone: string;

  @Prop()
  age: number;
}
export const UserSchema = SchemaFactory.createForClass(User);
