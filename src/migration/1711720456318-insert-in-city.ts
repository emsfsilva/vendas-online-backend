import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertInCity1711720456318 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    
            INSERT INTO city("id", "name", "state_id") VALUES (1, 'Abreu e Lima', 1);
            INSERT INTO city("id", "name", "state_id") VALUES (2, 'Afogados da Ingazeira', 1);
            INSERT INTO city("id", "name", "state_id") VALUES (3, 'Barra de Guabiraba', 1);
            INSERT INTO city("id", "name", "state_id") VALUES (4, 'Cabo de Santo Agostinho', 1);
            INSERT INTO city("id", "name", "state_id") VALUES (5, 'Dormentes', 1);
            INSERT INTO city("id", "name", "state_id") VALUES (6, 'Escada', 1);
            INSERT INTO city("id", "name", "state_id") VALUES (7, 'Exu', 1);
            INSERT INTO city("id", "name", "state_id") VALUES (8, 'Feira Nova', 1);
            INSERT INTO city("id", "name", "state_id") VALUES (9, 'Garanhuns', 1);
            INSERT INTO city("id", "name", "state_id") VALUES (10, 'joão Pessoa', 2);
            INSERT INTO city("id", "name", "state_id") VALUES (11, 'Salvador', 3);
                   
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DELETE FROM public.city;
        `);
  }
}
