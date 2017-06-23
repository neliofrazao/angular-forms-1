import { Dependency, Question } from '.';
import { Validation } from '../validation';

export class Text extends Question<string> {

  public constructor(
    code: string,
    description: string,
    dependencies: Dependency[],
    type: string,
    answer: string = null,
    validations: Validation[] = [],
    private _mask: string = null,
    private _placeholder: string = null,
  ) {
    super(code, description, dependencies, type, answer, validations || []);
  }

  public get mask(): string {
    return this._mask;
  }

  public get placeholder(): string {
    return this._placeholder;
  }

  public static fromJson(question: Text): Text {
    return new Text(
      question.code,
      question.description,
      question.dependencies,
      question.type,
      question.answer,
      question.validations,
      question.mask,
      question.placeholder
    );
  }
}
