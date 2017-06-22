import { Question, Text, TextArea, Check, Radio, Select } from '../question';

export class QuestionFactory {

  private _types: any = {
    'text': Text,
    'textarea': TextArea,
    'check': Check,
    'radio': Radio,
    'select': Select,
  };

  public constructor(
    private _question: Question<any>
  ) { }

  public create(): Question<any> {
    return this._types[this._question.type].fromJson(this._question);
  }
}
