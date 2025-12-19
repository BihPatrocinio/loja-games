import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, DeleteResult } from 'typeorm';

import { Produto } from '../entities/produto.entity';
import { CategoriaService } from '../../categoria/services/categoria.service';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
    private readonly categoriaService: CategoriaService,
  ) {}

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find({
      relations: {
        categoria: true,
      },
    });
  }

  async findById(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: { id },
      relations: {
        categoria: true,
      },
    });

    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }

    return produto;
  }

  async findByNome(nome: string): Promise<Produto[]> {
    return this.produtoRepository.find({
      where: { nome: Like(`%${nome}%`) },
      relations: { categoria: true },
    });
  }

  async create(produto: Produto): Promise<Produto> {
    
    // Validação de categoria existente
    await this.categoriaService.findById(produto.categoria.id);

    return this.produtoRepository.save(produto);
  }

  async update(produto: Produto): Promise<Produto> {
    
    // Validação de produto existente
    await this.findById(produto.id);

    // Validação de categoria existente
    await this.categoriaService.findById(produto.categoria.id);

    return this.produtoRepository.save(produto);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return this.produtoRepository.delete(id);
  }
}
