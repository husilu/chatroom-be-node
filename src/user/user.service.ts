import { Injectable, Inject } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { In, Like, Raw, MongoRepository } from 'typeorm';
import { User } from './user.mysql.entity'

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: MongoRepository<User>
  ) { }

  createOrSave(user) {
   return this.userRepository.save(user)
  }
}
