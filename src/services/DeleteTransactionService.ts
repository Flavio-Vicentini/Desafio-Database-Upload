import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository'
import { getCustomRepository } from 'typeorm';


class DeleteTransactionService {
  public async execute(id:string): Promise<void> {
    const transactionRepository = getCustomRepository (TransactionsRepository)
    const findTransaction = await transactionRepository.findOne(id)
    if (!findTransaction){
      throw new AppError ('ID invalid.')
    }

    await transactionRepository.remove(findTransaction);
  }
}

export default DeleteTransactionService;
