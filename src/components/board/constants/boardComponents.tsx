import { Label } from '../../types'

export const choices: string[] = [
  'make page',
  'style page',
  'complete functionality',
  'make backend userAuth'
];

export const categories: string[] = ['todo','doing','qa','done'];

export const labels: Label[] = [
  { name: 'register', color: {backgroundColor: '#1650C0'}},
  { name: 'login', color: {backgroundColor: '#C0A516'}},
  { name: 'update account', color: {backgroundColor: '#C02016'}},
  { name: 'delete account', color: {backgroundColor: '#9E16C0'}},
  { name: 'post', color: {backgroundColor: '#16C045'}},
  { name: 'comment', color: {backgroundColor: '#C05E16'}},
  { name: 'edit post', color: {backgroundColor: '#16C0BA'}},
  { name: 'edit comment', color: {backgroundColor: '#FF73E0'}},
  { name: 'delete post', color: {backgroundColor: '#9E9E9E'}},
  { name: 'delete comment', color: {backgroundColor: '#3916C0'}},
]
