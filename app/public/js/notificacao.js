var query = location.search.slice(1)

        if (query == 'msg=cliente_nao_encontrado') {
            UIkit.notification({
                message: 'Cliente Nao encontrado',
                pos: 'top-center',
                status: 'danger',
                timeout: 5000
            });
        }

        if (query == 'msg=cliente_cadastrado') {
            UIkit.notification({
                message: 'Cliente Cadastrado',
                status: 'success',
                timeout: 5000
            });
        }

        if (query == 'msg=erro_del_usuario') {
            UIkit.notification({
                message: 'Ocorreu Um erro ao Deletar o cliente',
                status: 'danger',
                timeout: 5000
            });
        }

        if (query == 'msg=Usuario_del') {
            UIkit.notification({
                message: 'Cliente Deletado',
                status: 'success',
                timeout: 5000
            });
        }

        if (query == 'msg=erro_del_agente') {
            UIkit.notification({
                message: 'Erro Ao deletar o Agente',
                status: 'danger',
                timeout: 5000
            });
        }

        if (query == 'msg=Agente_del') {
            UIkit.notification({
                message: 'Agente Deletado',
                status: 'success',
                timeout: 5000
            });
        }
        
        if (query == 'msg=erro_del_status') {
            UIkit.notification({
                message: 'Ocorreu Um erro Ao deletar o Status',
                status: 'danger',
                timeout: 5000
            });
        }
        
        if (query == 'msg=Status_del') {
            UIkit.notification({
                message: 'Status Deletado',
                status: 'success',
                timeout: 5000
            });
        }

        if (query == 'msg=cliente_editado') {
            UIkit.notification({
                message: 'Cliente Editado',
                status: 'success',
                timeout: 5000
            });
        }
        
        if (query == 'msg=cliente_nao_editado') {
            UIkit.notification({
                message: 'Cliente nao Editado',
                status: 'danger',
                timeout: 5000
            });
        }

        if (query == 'msg=cliente_nao_cadastrado') {
            UIkit.notification({
                message: 'Cliente nao Cadastrado',
                status: 'danger',
                timeout: 5000
            });
        }

        if (query == 'msg=log_cadastrado') {
            UIkit.notification({
                message: 'Login Cadastrado',
                status: 'success',
                timeout: 5000
            });
        }

        if (query == 'msg=log_nao_cadastrado') {
            UIkit.notification({
                message: 'Login nao cadastrado',
                status: 'danger',
                timeout: 5000
            });
        }

        if (query == 'msg=usuario_cadastrado') {
            UIkit.notification({
                message: 'Usuario Cadastrado',
                status: 'success',
                timeout: 5000
            });
        }

        if (query == 'msg=usuario_nao_cadastrado') {
            UIkit.notification({
                message: 'Usuario nao cadastrado',
                status: 'danger',
                timeout: 5000
            });
        }

        if (query == 'msg=status_cadastrado') {
            UIkit.notification({
                message: 'Status Cadastrado',
                status: 'success',
                timeout: 5000
            });
        }

        if (query == 'msg=status_nao_cadastrado') {
            UIkit.notification({
                message: 'Status nao cadastrado',
                status: 'danger',
                timeout: 5000
            });
        }

        if (query == 'msg=cliente_sem_historico') {
            UIkit.notification({
                message: 'Historico nao Encontrado',
                status: 'danger',
                timeout: 5000
            });
        }
        