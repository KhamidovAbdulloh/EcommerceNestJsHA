import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UserSignUpDto } from './dto/user-signup.dto';
import { hash, compare } from 'bcrypt'
import { UserLoginDto } from './dto/user-login.dto';
import { sign } from 'jsonwebtoken';

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}
  
  async signup(userSignUpDto: UserSignUpDto): Promise<UserEntity>{
    const userExists = await this.findUserByEmail(userSignUpDto.email)
    if(userExists) throw new BadRequestException('Email is already registered!')
    userSignUpDto.password = await hash(userSignUpDto.password, 10)
    let user = this.usersRepository.create(userSignUpDto);
    user = await this.usersRepository.save(user);
    delete user.password
    return user;
  }

  async login(userLoginDto: UserLoginDto): Promise<UserEntity>{
    const userExists = await this.usersRepository.createQueryBuilder('users')
    .addSelect('users.password').where('users.email=:email', {email: userLoginDto.email}).getOne()
    if(!userExists) throw new BadRequestException("User doesn't exist!")
    const matchPassword = await compare(userLoginDto.password, userExists.password)
    if(!matchPassword) throw new BadRequestException("Entered wrong password!")
    delete userExists.password
    return userExists
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.usersRepository.findOneBy({id});
    if(!user) throw new NotFoundException("User not found!")
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findUserByEmail(email: string){
    return await this.usersRepository.findOneBy({email});
  }

  async accessToken(user: UserEntity): Promise<string>{
    return sign({id: user.id, email: user.email}, process.env.ACCESS_TOKEN_SECRET_KEY, {expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME},)
  }
}
