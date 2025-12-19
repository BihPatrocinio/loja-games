import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity('tb_produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 255 })
  descricao: string;

  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @Column({ type: 'int' })
  quantidade: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
