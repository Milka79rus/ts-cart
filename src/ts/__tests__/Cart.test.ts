import { describe, test, expect, beforeEach } from '@jest/globals';
import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Smartphone from '../domain/Smartphone';

describe('Cart with logic for multiple items', () => {
  let cart: Cart;
  let movie: Movie;
  let phone: Smartphone;

  beforeEach(() => {
    cart = new Cart();
    movie = new Movie(1, 'Мстители', 500, 2012, 'США', 'Assemble!', 'экшен', '137 мин.');
    phone = new Smartphone(2, 'iPhone', 1000);
  });

  test('should add movie only once', () => {
    cart.add(movie);
    cart.add(movie);
    expect(cart.items.length).toBe(1);
  });

  test('should add multiple smartphones', () => {
    cart.add(phone);
    cart.add(phone);
    expect(cart.items.length).toBe(2);
    expect(cart.getTotalPrice()).toBe(2000);
  });

  test('should decrease quantity of smartphones', () => {
    cart.add(phone);
    cart.add(phone);
    cart.decrease(2);
    expect(cart.items.length).toBe(1);
  });

  test('should return correct total with discount', () => {
    cart.add(movie); // 500
    expect(cart.getTotalPriceWithDiscount(10)).toBe(450);
  });

  test('should remove by id', () => {
    cart.add(movie);
    cart.removeById(1);
    expect(cart.items.length).toBe(0);
  });
  test('should not decrease if item id not found', () => {
    cart.add(phone);
    cart.decrease(999);
    expect(cart.items.length).toBe(1);
  });

  test('should check movie properties (for 100% domain coverage)', () => {
    expect(movie.country).toBe('США');
    expect(movie.slogan).toBe('Assemble!');
  });

  test('should check smartphone properties', () => {
    expect(phone.canCount).toBe(true);
  });
});