import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

import "../globals.css";
import MainPanel from '@/components/MainPanel';

export default async function Dashboard() {
    // サーバーサイドでセッション情報を取得
    const session = await getServerSession(authOptions);
    // セッションが存在しない場合は /login へリダイレクト
    if (!session) {
        redirect('/login');
    }

    return (
        <MainPanel  />
    );
}
