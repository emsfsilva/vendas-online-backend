import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInState1711720435861 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                INSERT INTO state("id", "name", "uf") VALUES (1, 'Pernambuco', 'PE');
                INSERT INTO state("id", "name", "uf") VALUES (2, 'Paraiba', 'PB');
                INSERT INTO state("id", "name", "uf") VALUES (3, 'Bahia', 'BA');             
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                
                DELETE FROM public.state;

        `);
  }
}
