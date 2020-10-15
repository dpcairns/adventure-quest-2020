import quests from '../data.js';
import { findById } from '../utils.js';

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

const quest = findById(quests, id);

console.log(quest);