package zhku.jsj141.config;

import org.glassfish.jersey.filter.LoggingFilter;
import org.glassfish.jersey.server.ResourceConfig;

public class RestApplication extends ResourceConfig {
	public RestApplication(){
        //���������ڵİ�·��
        packages("zhku.jsj141.rest");
        //��ӡ������־�����ڸ��ٵ��ԣ���ʽ���������
        register(LoggingFilter.class);
    }
}
