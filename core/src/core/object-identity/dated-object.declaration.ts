import { IDeclaration, PropertyTypes } from '../../helpers';

export type IEntityDate = Date | string | number;

export type IEntityDateNullable = IEntityDate | null;

export type IDatedObject = {
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDateNullable;
};

export const DatedObject = () => {
  return {
    name: 'DatedObject',

    properties: {
      dateCreated: {
        nullable: false,
        type: PropertyTypes.DATE_TIME,
        description: 'Data de criação do registro.',
        validator: null,
      },

      dateUpdated: {
        nullable: false,
        type: PropertyTypes.DATE_TIME,
        description: 'Data de atualização do registro.',
        validator: null,
      },

      dateDeleted: {
        nullable: true,
        type: PropertyTypes.DATE_TIME,
        description: 'Data de remoção do registro.',
        validator: null,
      },
    },
  } satisfies IDeclaration;
};
