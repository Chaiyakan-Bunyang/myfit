import { NextResponse } from 'next/server';
import { API_URL } from './app/components/constant/constant';

export async function middleware(request: Request) {
  let res = null;
  try {
    const response = await fetch(API_URL.AUTHENTICATION, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': request.headers.get('cookie') || '',
      },
    });
    res = await response.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }  

  if (!res || res.statusCode == 401) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();

// return NextResponse.json({
//     res: res
// })
}

export const config = {
  matcher: '/main',
};
