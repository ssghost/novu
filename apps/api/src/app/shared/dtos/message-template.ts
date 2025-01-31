import { IsDefined, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import {
  StepTypeEnum,
  IEmailBlock,
  ITemplateVariable,
  IMessageCTA,
  ActorTypeEnum,
  MessageTemplateContentType,
} from '@novu/shared';

export class MessageTemplate {
  @IsOptional()
  @IsEnum(StepTypeEnum)
  type: StepTypeEnum;

  @IsOptional()
  variables?: ITemplateVariable[];

  @IsDefined()
  content: string | IEmailBlock[];

  @IsOptional()
  contentType?: MessageTemplateContentType;

  @IsOptional()
  @ValidateNested()
  cta?: IMessageCTA;

  @IsOptional()
  @IsString()
  feedId?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  subject?: string;

  @IsOptional()
  @IsString()
  title?: string;

  actor?: {
    type: ActorTypeEnum;
    data: string | null;
  };
}
